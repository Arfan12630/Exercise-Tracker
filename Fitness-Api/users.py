from flask import Flask,Blueprint, request
from models import *     

users = Blueprint("users", __name__)


@users.route("/users/signup",methods=['POST'])
def signup():
    return User().signup()


