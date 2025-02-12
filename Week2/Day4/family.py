import json


my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

##Write A Python Dictionary Into A JSON File
# json_file = "family.json"

# with open(json_file, 'w') as file_obj:
#     json.dump(my_family, file_obj)


##Convert A Python Dictionary To JSON String : Pretty Print 
# ## esto es lo mismo que arriba pero mas bonito y salio en el json index
json_file = "index.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj, indent = 2, sort_keys=True)

# print ("Jane's Children:") 
# for child in my_family["children"]:
#         print(f"- {child['firstName']} is {child['age']} years old.")
    
# favorite_colors = {"Alice": "blue", "Bob": "green"}
# for child in my_family ["children"]:
#     child ["favorite_color"] = favorite_colors.get(child["firstName"],
#     "unknown")

##Convert A Python Dictionary To JSON String
json_my_family = json.dumps(my_family)
print(json_my_family)