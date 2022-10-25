from flask import request,jsonify
from passlib.hash import pbkdf2_sha256
from db_connect import db_collection_users
class Register():

 def registration(self):
     register = {
            "registeredEnteredFirstname":"",
            "registeredEnteredLastName":"",
            "registeredEnteredPassword":"",
            "registeredEnteredRepeatedPassword":"",
            "registeredEmailAdress":""
        }

     if register['registeredEnteredPassword'] == register['registeredEnteredRepeatedPassword']:
        register['registeredEnteredPassword'] = pbkdf2_sha256.encrypt(register['registeredEnteredPassword'])
        db_collection_users.insert_one(register)
        return jsonify(register), 200
     else:
        return jsonify({"error: Passwords do not match"}), 400
    

   
