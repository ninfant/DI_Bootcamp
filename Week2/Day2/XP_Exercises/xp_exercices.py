#ex1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# bengal_cat =Bengal('Tulo', 4)
# chartreux_cat =Chartreux('Poli',5)
# siamese_cat=Siamese('Roco',2)

# all_cats =[bengal_cat, chartreux_cat, siamese_cat]

# sara_pets= Pets(all_cats)

# sara_pets.walk()

# # ex2
# # Create a class called Dog with the following attributes name, age, weight.
# # Implement the following methods in the Dog class:
# # bark: returns a string which states: “<dog_name> is barking”.
# # run_speed: returns the dogs running speed (weight/age*10).
# # fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.
# Create 3 dogs and run them through your class.

# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight
        
#     def bark(self):
#         print(f"{self.name} is barking")
#     def run_speed(self):
#         return self.weight/self.age*10
#     def fight(self, other_dog):
#         dog1 = self.run_speed()*self.weight
#         dog2 = other_dog.run_speed()*other_dog.weight
#         if dog1 > dog2:
#             return f'The dog that won the fight was:{self.name}'
#         else:
#             return f'The dog that won the fight was:{other_dog.name}'

# my_dog = Dog('Dingo', 4, 5)
# other_dog =Dog('Puli', 2, 1)

# dog_one=Dog('Tata', 1, 2)
# dog_two=Dog('Coli', 3, 3)
# dog_three=Dog('Devi', 2, 3)

# my_dog.bark()
# print(my_dog.run_speed())

# # print(my_dog.fight(other_dog))

# # dog_one.bark()
# # dog_two.bark()
# # dog_three.bark()

# print(dog_one.run_speed())
# print(dog_two.run_speed())
# print(dog_three.run_speed())

# print(dog_one.fight(dog_two))
# print(dog_two.fight(dog_three))
# print(dog_three.fight(dog_one))


#ex3 didnt see in on class

##ex4
# class Family():
#     def __init__(self, last_name):
#         self.last_name =last_name
#         self.members=[]
#     def born(self, **kwargs):
#         self.members.append(dict(kwargs))
#         print('Congratulations to the family for the new baby')
    
#     def is_18(self,member_name):
#         for member in self.members:
#             if member.get('name') == member_name:
#                 return member.get('age')>18
#             else:
#                 return False
#     def family_presentation(self):
#         for members in self.members:
#             name = members.get("name")
#             age = members.get("age")
#             print(f"- {name}, Age: {age}")


   
# my_family =Family("lopez")

# my_family.born(name="Tom", age=5)
# my_family.born(name="Bob", age=17)
# my_family.born(name="Charlie", age=30)

# print(my_family.members)
# my_family.is_18('Tom')

# my_family.family_presentation()

#ex5
# class TheIncredibles(Family):
#     def __init__(self, last_name):  
#         super().__init__(last_name)
    
#         self.members =[
#                         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#                         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#                         ]
#     def use_power(self):
#         if self.members[0].get('age')> 18:
#             return self.members[0].get('power')
#         else:
#             raise Exception("They are not over 18 years old.")
#     def incredible_presentation(self):
#         print('Here is our powerful family')
#         self.family_presentation()
        

# theincredibles_family = TheIncredibles('alvarez')

# print(theincredibles_family.use_power())

# theincredibles_family.incredible_presentation()

# theincredibles_family.born(name="Tuti", age=21)
# theincredibles_family.incredible_presentation()