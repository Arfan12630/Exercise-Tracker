import uuid
#uuid3 takes in the uuid and a name we assign to the uuid 
#uuid4 is a random uuid that is generated 
# x = uuid.uuid1()
# print(uuid.uuid3(x,"name ")) 
def generate_uuid():
    return str(uuid.uuid4())

print(generate_uuid())