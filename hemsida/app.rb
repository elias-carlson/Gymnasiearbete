require_relative './model/model'

class App < Sinatra::Base

	enable :sessions
	register Sinatra::Flash
	include HSGH_DB

	get ('/') do
		slim(:index, locals:{user: session[:user], error: flash[:error], username_or_email: flash[:username_or_email]})
	end

	get '/register' do
		slim(:register, :layout => false, locals:{error: flash[:error], element: flash[:element], username: flash[:username], email: flash[:email]})
	end

	get '/app' do
		website = get_html("my_simple_company")
		slim(:app, locals:{user: session[:user], error: flash[:error], username_or_email: flash[:username_or_email], website: website})
	end

	post('/register') do
		username = params[:username]
		email = params[:email]
		password = params[:password]
		password_confirmation = params[:password_confirmation]

		user = get_user_with_username(username)

		special = "?<>',![]}{=-)(*&^%$#`~{}"
		regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/

		if user == nil
			if username != "" && email != "" && password != "" && password_confirmation != ""
				if username =~ regex
					flash[:error] = "Username cannot contain any special characters."
					flash[:element] = "#username"
					flash[:username] = username
					flash[:email] = email
					redirect('/register')
				else 
					if email.include?('@')
						if password == password_confirmation 
							create_user(username, password, email)
							redirect('/')
						else
							flash[:error] = "Passwords not matching."
							flash[:element] = "#password, #password_confirmation"
							flash[:username] = username
							flash[:email] = email
							redirect('/register')
						end
					else
						flash[:error] = "Enter valid email address."
						flash[:element] = "#email"
						flash[:username] = username
						flash[:email] = email
						redirect('/register')
					end
				end
			else
				flash[:error] = "Please fill in all fields."
				flash[:username] = username
				flash[:email] = email
				redirect('/register')
			end
		else
			flash[:error] = "The username is already taken."
			flash[:element] = "#username"
			flash[:username] = username
			flash[:email] = email
			redirect('/register')
		end
	end

	post('/login') do
		username_or_email = params[:username_or_email]
		password = params[:password]

		user = get_user_with_username(username_or_email)

		if username_or_email == "" || password == ""
			flash[:error] = "Please fill in all fields."
			flash[:username_or_email] = username_or_email
			redirect(back)
		end

		if user == nil
			user = get_user_with_email(username_or_email)
		end

		if user == nil
			flash[:error] = "Incorrect user credentials."
			flash[:username_or_email] = username_or_email
			redirect(back)
		end

		password_digest = user["password_digest"]

		if BCrypt::Password.new(password_digest) == password
			session[:user] = user
			redirect(back)
		else
			flash[:error] = "Incorrect user credentials."
			flash[:username_or_email] = username_or_email
			redirect(back)
		end
	end

	post('/logout') do
		session[:user] = nil
		redirect(back)
	end
end
