
# class Point:

#     def  __init__(self, x, y):
#         self.x = x
#         self.y = y

# p = Point(3,4)

# print('p.x is', p.x)
# print('p.y is', p.y)



class Dog:
    def __init__(self, name, color,  breed, floppy_ears): # init es una funcion inicializadora, los atributos are set here
        print('A new dog has been inizialazed')
        
        self.name = name
        self.color = color
        self.breed = breed
        self.floppy_ears = floppy_ears

    def __str__(self): # __ dunder fucntion ,dunder: signif double underscore funtion
        return f'{self.name}, {self.color}, {self.breed}, {self.floppy_ears}'

    def bark(self):
      return f'{self.name} goes WOOF'

    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters")

    def fetch(self, object):
        print(f'{self.name} fetched {object}')

    def eat(self, food):
        print(f'{self.name} ate {food}')
    
    def rename(self, new_name):
        self.name =new_name




penaut=Dog('Penaut','Brown', 'mutt', True) # create a dog
dingo = Dog('dingo','white', 'cnaanni', False)
# print(penaut.breed)  #usando el __init__
# print(penaut)       #usando el __str__ 

penaut.color ='grey'   #podemos cambiar el atributo dandole otro valor 
print(penaut) 
print(dingo) 

print(dingo.bark())

print(dingo.fetch('ball'))
print(dingo.eat('peanut butter'))

print(penaut.name)  #aqui antes de cambiar el nombre
penaut.rename('penaut butter')
print(penaut.name) # aqui luego de cambiar el nombre



