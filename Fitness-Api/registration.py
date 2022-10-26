from flask import request,jsonify
from passlib.hash import pbkdf2_sha256
from db_connect import db_collection_users
from generateuuid import generate_uuid
class Register():

 def registration(self):
     register = {
            "id": generate_uuid(),
            "registeredEnteredFirstname":request.json['enteredFirstname'],
            "registeredEnteredLastName":request.json['enteredLastname'],
            "registeredUserName":request.json['enteredUsername'],
            "registeredEnteredPassword":request.json['enteredPassword'],
            "registeredEnteredRepeatedPassword":request.json['enteredRepeatedPassword'],
            "registeredEmailAdress":request.json['enteredEmail']
        }

    
     register['registeredEnteredPassword'] = pbkdf2_sha256.encrypt(register['registeredEnteredPassword'])
     register['registeredEnteredRepeatedPassword'] = pbkdf2_sha256.encrypt(register['registeredEnteredRepeatedPassword'])


     if db_collection_users.find_one({"registeredUserName": register['registeredUserName']}):
         return jsonify({"error": "Username is already in use"}), 400

     if register["registeredEnteredFirstname"].strip() =='':
        return jsonify({"error": "Fill all fields"}), 400

        
     if register["registeredEnteredLastName"].strip() =='':
        return jsonify({"error": "Fill all fields"}), 400
    
     if register["registeredEnteredUserName"].strip() =='':
        return jsonify({"error": "Fill all fields"}), 400
     
        
     if register["registeredEnteredPassword"].strip() =='':
        return jsonify({"error": "Fill all fields"}), 400
     
     
     db_collection_users.insert_one(dict(register))  
     return jsonify(register), 200


    
   

   
