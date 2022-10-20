from hashlib import pbkdf2_hmac
from flask import Flask, jsonify, request, session
from generateuuid import generate_uuid
from passlib.hash import pbkdf2_sha256
from db_connect import db_collection_users
class User:

   

    def start_session(self,user):
        session['logged_in'] = True
        session['user'] = user

    def signup(self):
  
        #created the user object 
        user = {

            "id": generate_uuid(),
            "enteredUserName":request.json['enteredUsername'],
            "enteredPassword":request.json['enteredPassword']
        }

        #Encrypt password
        user['enteredPassword'] = pbkdf2_sha256.encrypt(user['enteredPassword'])
      

        # Checking to see if same username was inputted 
        if db_collection_users.find_one({ "enteredUserName":user['enteredUserName'] }):
            return jsonify(user), 200

        if db_collection_users.find_one({"enteredPassword":user["enteredPassword"]}): 
            return jsonify(user), 200

        else:
            return jsonify({"error": "Does not match"}), 400

      
       

            
       