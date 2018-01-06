require_relative './model/model'

class App < Sinatra::Base

	enable :sessions
	include HSGH_DB

	get ('/') do
		slim(:index, locals:{user: session[:user]})
	end

	get '/register' do
		slim(:register, :layout => false, locals:{error: session[:error]})
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
					session[:error] = "Username cannot contain any special characters."
					redirect('/register')
				else 
					if email.include?('@')
						if password == password_confirmation 
							create_user(username, password, email)
							redirect('/')
						else
							session[:error] = "Passwords not matching."
							redirect('/register')
						end
					else
						session[:error] = "Enter valid email address."
						redirect('/register')
					end
				end
			else
				session[:error] = "Please fill in all fields."
				redirect('/register')
			end
		else
			session[:error] = "The username is already taken."
			redirect('/register')
		end
	end

	post('/login') do
		username_or_email = params[:username_or_email]
		password = params[:password]

		user = get_user_with_username(username_or_email)

		if user == nil
			user = get_user_with_email(username_or_email)
		end

		# p user_email["password_digest"]

		if user == nil
			session[:error] = "Incorrect username or email."
			redirect('/')
		end

		# user_id = user["id"]
		# username = user["username"]
		# email = user["username"]
		# phone_no = user["username"]
		# company_name = user["company_name"]
		password_digest = user["password_digest"]

		if BCrypt::Password.new(password_digest) == password
			session[:user] = user
			redirect('/')
		else
			session[:error] = "Incorrect password."
			redirect('/')
		end
	end

	post('/logout') do
		session[:user] = nil
		redirect('/')
	end
end
