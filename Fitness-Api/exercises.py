from flask import Flask, Blueprint
from db_connect import *
import json 
from bson import json_util
#TODO 
# make this a blue print 


exercises = Blueprint("exercises", __name__)
# arms, legs, shoulders, biceps, triceps
# Routes for exercises

@exercises.route("/chest")
def get_chests():
    chests = list(db_collection_chest.find({}))
    return json.dumps(chests, default=json_util.default)

@exercises.route("/abdominals")
def get_abdominals():
    abdominals = list(db_collection_abdominals.find({}))
    return json.dumps(abdominals, default=json_util.default)

@exercises.route("/back")
def get_back():
    backs = list(db_collection_back.find({}))
    return json.dumps(backs, default=json_util.default)

@exercises.route("/biceps")
def get_biceps():
    biceps = list(db_collection_biceps.find({}))
    return json.dumps(biceps,default=json_util.default)

@exercises.route("/shoulders")
def get_shoulders():
    shoulders = list(db_collection_shoulders.find({}))
    return json.dumps(shoulders,default=json_util.default)
