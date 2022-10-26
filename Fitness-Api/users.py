from flask import session,Blueprint, request,redirect
from functools import wraps
from models import * 
from registration import *    


users = Blueprint("users", __name__)



@users.route("/users/signin",methods=['POST'])
def signin():
    return User().signin()



@users.route("/users/register", methods=['POST'])
def register():
    return Register().registration()
# @users.route("/users/signin",methods=['POST'])
# def signup():
#     credentials = request.get_json(force=True)
#     # get credentials 
#     # match credentials 
#     #encrypt the password that is sent 
#     #check if it matches the one that is in db 
#     return User().signup()

@users.route("/users/signout")
def signout():
    return User.signout()


