require_relative './model/model'

class App < Sinatra::Base

	enable :sessions
	register Sinatra::Flash
	include HSGH_DB

	get ('/') do
		slim(:index, locals:{user: session[:user], error: flash[:error]})
	end

	get '/register' do
		slim(:register, :layout => false, locals:{error: flash[:error]})
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
					redirect('/register')
				else 
					if email.include?('@')
						if password == password_confirmation 
							create_user(username, password, email)
							redirect('/')
						else
							flash[:error] = "Passwords not matching."
							redirect('/register')
						end
					else
						flash[:error] = "Enter valid email address."
						redirect('/register')
					end
				end
			else
				flash[:error] = "Please fill in all fields."
				redirect('/register')
			end
		else
			flash[:error] = "The username is already taken."
			redirect('/register')
		end
	end

	post('/login') do
		username_or_email = params[:username_or_email]
		password = params[:password]

		user = get_user_with_username(username_or_email)

		if username_or_email == "" || password == ""
			flash[:error] = "Please fill in all fields."
			redirect('/')
		end

		if user == nil
			user = get_user_with_email(username_or_email)
		end

		if user == nil
			flash[:error] = "Incorrect user credentials."
			redirect('/')
		end

		password_digest = user["password_digest"]

		if BCrypt::Password.new(password_digest) == password
			session[:user] = user
			redirect('/')
		else
			flash[:error] = "Incorrect user credentials."
			redirect('/')
		end
	end

	post('/logout') do
		session[:user] = nil
		redirect('/')
	end
end
