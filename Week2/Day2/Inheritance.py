# #exercicio 1 
# class Animal():
#     def __init__(self, name):
#         self.name = name

# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} barked, WAF !")


# dingo =Dog('Dingo')

# print(dingo.name)
# dingo.bark()


#execricio 2
# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound

#     def make_sound(self):
#         print(f"I am an animal, and I love saying {self.sound}")

# class Dog(Animal):
#     pass

# rex= Dog("dog", 4, "wouaf")
# blob_fish = Animal('fish',0, 'blub blub')

# print('This animal is a:', rex.type)
# # >> This animal is a dog

# print('This dog has', rex.number_legs , ' legs')
# # >> This dog has 4 legs

# print('This dog makes the sound ', rex.sound)
# # >> This dog makes the sound wouaf

# rex.make_sound()
# # >> I am an animal, and I love saying wouaf

# blob_fish.make_sound()


# #execerice
# class Circle:
#     def __init__(self, diameter):
#       self.diameter = diameter

#     def grow(self, factor=2):
#         """grows the circle's diameter by factor"""
#         self.diameter = self.diameter * factor

# class NewCircle(Circle):
#     def grow(self, factor=2):
#         """grows the area by factor..."""
#         self.diameter = (self.diameter * factor * 2)

# nc = NewCircle(1)
# print(nc.diameter)

# nc.grow()

# print(nc.diameter)

#exercice with The Super() Function With the super() function, you can gain access to inherited methods that have been overwritten in a class object.
class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

class Dog(Animal):
    def __init__(self, type, number_legs, sound, fetch_ball):
        super().__init__(type, number_legs, sound) # using super() function
        # Or : Animal.__init__(self,type, number_legs, sound)
        self.fetch_ball = fetch_ball

rex = Dog('dog', 4, "wouaf", True)
print('This animal is a:', rex.type)
# >> This animal is a dog

print('This dog has', rex.number_legs , ' legs')
# >> This dog has 4 legs

print('This dog makes the sound ', rex.sound)
# >> This dog makes the sound wouaf

print('Does this dog fetchs balls ? ', rex.fetch_ball)
# >> Does this dog fetchs balls ? True


#exercice with The Super() Function
class MyClass(object):
    def func(self):
        print("I'm being called from the Parent class")


class ChildClass(MyClass):
    def func(self):
        print("I'm actually being called from the Child class")
        print("But...")
        # Calling the `func()` method from the Parent class.
        super(ChildClass, self).func()

my_instance_2 = ChildClass()
my_instance_2.func()

#exercice with The Super() Function
# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.

class Door():
    def __init__(self, is_opened=True):
        self.is_opened = is_opened
    def open_door(self):
        self.is_opened =True
    def close_door(self):
        self.is_opened = False

# We can create a class called BlockedDoor that inherits from the base class Door.
# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

class Blackdoor(Door):
    def __init__(self):
     super().__init__(is_opened=False)
    def open_door(self):
        print('blocked door cannot be opened')
        print(f'the door is open?{self.is_opened}')
    def close_door(self):
        print('blocked door cannot be closed')
        print(f'the door is closed?{self.is_opened}')


blocked = Blackdoor()
blocked.open_door()
blocked.close_door()