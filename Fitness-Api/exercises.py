from flask import Flask, Blueprint
from db_connect import db_collection_exercises
import json 
from bson import json_util



app = Flask(__name__)

@app.route("/chest")
def get_seeeds():
    all_seeds = list(db_collection_exercises.find({}))
    return json.dumps(all_seeds, default=json_util.default)

@app.route("/abdominals")
def get_abdominals():
    None



if __name__ == "__main__":
    app.run(debug=False)