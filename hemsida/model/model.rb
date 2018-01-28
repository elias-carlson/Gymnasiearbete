module HSGH_DB
    DB_PATH = 'db/database.sqlite'

    def db_connect
        db = SQLite3::Database.new(DB_PATH)
        db.results_as_hash = true
        return db
    end

    def get_user_with_username username
        db = db_connect()
        result = db.execute("SELECT * FROM users WHERE username=?", [username])
        return result.first
    end

    def get_user_with_email email
        db = db_connect()
        result = db.execute("SELECT * FROM users WHERE email=?", [email])
        return result.first
    end

    def create_user username, password, email
        db = db_connect()
        password_digest = BCrypt::Password.create(password)
        db.execute("INSERT INTO users(username, password_digest, email) VALUES (?,?,?)", [username, password_digest, email])
    end

    def get_html template_name
        db = db_connect()
        db.results_as_hash = false
        # result = db.execute("SELECT html FROM sites WHERE template_id IN(SELECT id FROM templates WHERE name=?)", template_name)
        result = db.execute("SELECT html FROM templates WHERE id=1")[0][0]
    end

end