# Analyse the code below. What will be the output ?
# Explain the goal of the methods: respuesta: acces and manipulate atributes 
# Create a method that modifies the name of the person

# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def show_details(self):
#     print("Hello my name is " + self.name)

#   def change_name(self, new_name):
#     self.name =new_name

# first_person = Person("John", 36)
# first_person.show_details()

# first_person.change_name('Peter')
# first_person.show_details()


#de este ejercciio solo ver lo que dice ojo
# #Analyse the code below. What will be the output ?

# class Computer():

#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)

# #OJO
# #Esta es uan forma de usar un atributo sin teber la funcon __init__
# mac_computer = Computer()   
# mac_computer.brand = "Apple"
# print(mac_computer.brand)



# dell_computer = Computer()

# Computer.description(dell_computer, "Mark")
# # IS THE SAME AS:
# dell_computer.description("Mark")