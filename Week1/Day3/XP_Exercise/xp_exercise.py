#ex1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# converted_list=dict(zip(keys,values))
# print(converted_list)


# #ex2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0
# for name, age in family.items():
#     if age < 3:
#         price = 0  
#     elif 3 <= age <= 12:
#         price = 10 
#     else:
#         price = 15  
#     total_cost += price

#     print(f"{name.capitalize()} has to pay: ${price}")

# print(f"\nTotal cost for the family: ${total_cost}")

#Bonus:
# family ={}

# while True:
#     name =input('Please enter you name or type quit to finish: ').strip()
#     if name == 'quit':
#         break

#     age=int(input(f'Please {name} enter your age: '))

#     family[name]=age

# print(family)

#ex3
# brand ={
# 'name': 'Zara',
# 'creation_date': '1975',
# 'creator_name': 'Amancio Ortega Gaona',
# 'type_of_clothes':['men', 'women', 'children', 'home'],
# 'international_competitors':['Gap', 'H&M', 'Benetton'],  
# "number_stores": 7000,  
#     "major_color": {  # Nested dictionary
#         "France": "blue",
#         "Spain": "red",
#         "US": ["pink", "green"] 
#     }

# }

# brand['number_stores']=2


# clothes_list = ", ".join(brand["type_of_clothes"])  
# sentence = f"Zara sells clothes for {clothes_list}."
# print(sentence)

# brand['country_creation']='Spain'
# print(brand)


# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual') 
# print(brand['international_competitors'])


# del brand['creation_date']
# print(brand)

# print(brand['international_competitors'][2])

# us_colors = brand["major_color"]["US"]
# print("Major clothes colors in the US:", ", ".join(us_colors))


# num_pairs = len(brand)
# print(f"The dictionary has {num_pairs} key-value pairs.")

# print(brand.keys())
# keys = ", ".join(brand.keys())
# sentence = f"The keys are: {keys}."
# print(sentence)


# more_on_zara={'creation_date': '1975',
#               'number_stores': '10 000'}
# # print(more_on_zara)

# brand.update(more_on_zara)
# # print(brand)

# print(brand['number_stores'])

#ex4
# users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# users_dict = {}

# for index, name in enumerate(users): 
#     users_dict[name] = index  

# print(users_dict)



#{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
# users_dict = {}
# for index, name in enumerate(users):  
#     users_dict[index] = name 
# print(users_dict)


# sorted_users = sorted(users)
# disney_users_C = {}
# for index, name in enumerate(sorted_users): 
#     disney_users_C[name] = index 
# print(disney_users_C)


# disney_users = {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
# filtered_dict = {} #  I will create an empty dictionary to store names with "i"
# for name, index in disney_users.items():
#     if "i" in name: 
#         filtered_dict[name] = index  # Add to the new dictionary

# print(filtered_dict)
