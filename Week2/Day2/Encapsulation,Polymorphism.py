#Encapsulation
#This prevents data from direct modification, which is called encapsulation. 
# In Python, we denote private attributes using underscore as prefix i.e., single _ or double __.

# private atribute : elf.__max_price = 900
# public method: def sell(self):    
# private method: def __sell(self):     
# class Computer():

#     def __init__(self):
#         self.name = "Apple Computer" # public
#         self.__max_price = 900 # private atribute debido a que tiene _ antes del nombre del atributo 

#     def sell(self):            # public method
#         print(f"Selling Price: {self.__max_price}")

#     def __sell(self):          # private method
#       print('This is private method')

#     def set_max_price(self, price):
#         self.__max_price = price

# c = Computer()

# print(c.set_max_price(2000))


# #Polymorphism
# #means different or related classes that use the same names for their functions.
# class Parrot():

#     def fly(self):
#         print("Parrot can fly")

#     def swim(self):
#         print("Parrot can't swim")

# class Penguin():

#     def fly(self):
#         print("Penguin can't fly")

#     def swim(self):
#         print("Penguin can swim")

# ########## common interface ########## 
# def flying_test(bird):
#     bird.fly()

# #instantiate objects
# blu = Parrot()
# peggy = Penguin()

# # passing the object
# flying_test(blu)
# # >> Parrot can fly

# flying_test(peggy)
# # >> Penguin can't fly