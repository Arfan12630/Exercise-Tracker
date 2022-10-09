from flask import Flask
from bs4 import BeautifulSoup
import requests 
import re
from db_connect import *
from generateuuid import generate_uuid
import json
from bson import json_util
# app = Flask(__name__)
# TODO 
# - get url
# - use a function
# have paramaters and arguments

def chestExercises(value):
    url = f"https://www.bodybuilding.com/exercises/{value}" 
    page = requests.get(url).text
    document = BeautifulSoup(page, "html.parser")
    chestExercise_format = {}
    chestExercise_format['metadata'] = {}

    header = document.find('h1', class_="ExHeading ExHeading--h2 ExDetail-h2").get_text().rstrip().lstrip()
    ptag = document.find('p').get_text().rstrip().lstrip()

    imagetag = document.find_all('img', class_="ExImg ExDetail-img js-ex-enlarge")[1]
    image = imagetag['src']
    chestExercise_format['metadata']['uuid'] = generate_uuid()
    chestExercise_format['metadata']['name'] = header
    chestExercise_format['metadata']['description'] = ptag 
    chestExercise_format['metadata']['image'] = image
    chestExercise_format['metadata']['benefits'] = benefitsOfExercise(value)
    chestExercise_format['metadata']['instructions'] = descriptionOfExercises(value)
    return chestExercise_format
# documentClass = document.find('div', id="videocon")


def benefitsOfExercise(exercise):
    url = f"https://www.bodybuilding.com/exercises/{exercise}" 
    page = requests.get(url).text
    document = BeautifulSoup(page, "html.parser")
  
    ol = document.find('h3', class_="ExHeading ExHeading--h3").find_next_sibling('ol')
    listtag = [(li.get_text())for li in ol.find_all('li')]

    return listtag
     

def descriptionOfExercises(exercise):
    url = f"https://www.bodybuilding.com/exercises/{exercise}" 
    page = requests.get(url).text
    document = BeautifulSoup(page, "html.parser")
    descriptionDiv = document.find_all('div', class_="grid-8 grid-12-s grid-12-m")
    div1 = descriptionDiv[1]
    ol = div1.find('ol')
    descriptionListTag = [(li.get_text()) for li in ol.find_all('li')]
    
    return descriptionListTag


# print(descriptionOfExercises("dumbbell-bench-press"))
# db_collection_shoulders.insert_one(chestExercises("standing-palms-in-dumbbell-press"))


