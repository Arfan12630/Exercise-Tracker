from flask import Flask
from users import users
from exercises import exercises
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


#TODO 
# add blue prints of every page 
app.register_blueprint(users)
app.register_blueprint(exercises)
app.secret_key = "super duper secret key"
    
if __name__ == "__main__":
    app.run(debug=False)