# #ex1
# # cats = []  # Global list to store all cat instances
# # class Cat:
# #     def __init__(self, cat_name, cat_age):
# #         self.name = cat_name
# #         self.age = cat_age
# #         cats.append(self)  #Tis line automatically adds each new instance
# #                             of the Cat class to the global list I cretaed called cats.

# #------instances---- OJO
# # cat1=Cat('Jerry', 2) 
# # cat2=Cat('Toni', 4)
# # cat3=Cat('Luli', 3)

# # # Este for es para saber que a cats.append(self) esta bien declarado y que recorriendolo vere lo que tiene dentro 
# # print(cats)
# # for cat in cats:
# #     print(cat.name)
# #     print(cat.age)
# # #----------------------
# # def oldest(cats):
# #     oldest_cat = cats[0]
# #     for cat in cats:  
# #        if cat.age > oldest_cat.age:
# #              oldest_cat = cat
        
# #     print (f'the oldest cat {oldest_cat.name} and is age is {oldest_cat.age} years old')

# # oldest(cats)

# #ex2
# # dogs = []
# # class Dog():
   
# #     def __init__(self,name, height):
# #         self.name =name
# #         self.height =height
# #         dogs.append(self) ##aqui declaro la lista de dogs que inicialice afuera

# #     def bark(self): # sino pones el self dentro del metodo no ves los parametros de la clase
# #         return f'{self.name} goes WOOF'

# #     def jump(self):
# #         print(f'{self.name} jump {self.height*2} cm high')

# # my_dog=Dog('Lucifer', 1.3) # asi creo un objeto de la clase
# # davids_dog =Dog('Rex', 50)
# # sarahs_dog = Dog('Teacup', 20)

# # print(f'Davidss dog name is {davids_dog.name}')
# # print(davids_dog.bark())
# # print(davids_dog.jump())

# # print(f'Sarahs dog name is {sarahs_dog.name}')
# # print(sarahs_dog.bark())
# # print(sarahs_dog.jump())

# # def biggerdog(dogs):
# #     bigger_dog=dogs[0]
# #     for dog in dogs:
# #         if dog.height > bigger_dog.height:
# #             bigger_dog = dog

# #     print(f'{bigger_dog.name} is the bigger dog')

# # biggerdog(dogs)

# #ex3

# # class Song():
# #     def __init__(self, lyrics): # Accept a list as a parameter
# #         self.lyrics = lyrics ## Store the list in an attribute
# #     def sing_me_a_song(self):
# #         for element in self.lyrics:
# #             print(element)
            
# # stairway= Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
# # song2 = Song(["Imagine all the people", "Living for today"])


# # stairway.sing_me_a_song()
# # song2.sing_me_a_song()

# #ex4
# # Zoo() class with the __init__ method that takes  just zoo_name as a parameter 
# # but initializes two attributes:
# # self.animals as an empty list
# # self.name as the zoo's name
# grouped = {}
# class Zoo():
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []
#     def __str__(self):
#         """Importante a tener en cuenta OJOOOO si quiero ver todo en Zoo
#           Returns a readable string representation of the zoo."""
#         return f"Zoo Name: {self.name}\nAnimals: {', '.join(self.animals) if self.animals else 'No animals yet'}"
    
#     def add_animal(self, new_animal):
#         if new_animal is not self.animals:
#             self.animals.append(new_animal)
#         return self.animals
#     def get_animals(self):
#         print(f'The Animals of the zoo: {', '.join(self.animals)}')
#     def sell_animal(self, animal_sold):
#             if animal_sold in self.animals:
#                 self.animals.remove(animal_sold)
#             return self.animals
#     def sort_animals(self):
#          sorted_animals =sorted(self.animals)
#          for animal in sorted_animals:
#               first_letter = animal[0]
#               if first_letter not in grouped:
#                   grouped[first_letter]=[]
             
#               grouped[first_letter].append(animal)
#          return grouped

# zoo1 = Zoo('Oficial Park')
# #Create a zoo object
# ramat_gan_safari = Zoo("Ramat Gan Safari")

# zoo1.add_animal('cat')
# zoo1.add_animal('dog')
# zoo1.add_animal('camel')
# zoo1.add_animal('armadillo')
# # print(zoo1)

# # zoo1.get_animals()

# # zoo1.sell_animal('dog')
# # zoo1.get_animals()

# # print(zoo1.sort_animals())


# animal = input("Which animal should we add to the zoo? ").strip().capitalize()
# ramat_gan_safari.add_animal(animal)

# animal = input("Which animal should we remove in the zoo? ").strip().capitalize()
# ramat_gan_safari.sell_animal(animal)

# print(ramat_gan_safari.get_animals())

# print(f'They are sorted and grouped: {ramat_gan_safari.sort_animals()}')
