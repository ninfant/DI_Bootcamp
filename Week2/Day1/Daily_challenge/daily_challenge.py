# #ex1
# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name
#         self.animals = {} 

#     def add_animal(self, animal, count=1):
#         if animal in self.animals: # If the animal is already in the dictionary, i will increase its count
#             self.animals[animal] += count 
#         else:
#             self.animals[animal] = count # if not i have to add it with the count that was given

#     def get_info(self):
#         info = f"{self.name}'s farm\n\n"
#         # to add each animal and the count
#         for animal, count in self.animals.items():
#             info += f"{animal} : {count}\n"
#         return info
#     def get_animal_types(self):
#         list_sort = sorted(self.animals)
#         return ", ".join(list_sort)
#     def get_short_info(self):
#         print(f'McDonald’s farm has {self.get_animal_types()}')


# macdonald = Farm("McDonald")

# macdonald.add_animal('cow', 5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)

# print(macdonald.get_info())

# macdonald.get_animal_types()
# macdonald.get_short_info()
