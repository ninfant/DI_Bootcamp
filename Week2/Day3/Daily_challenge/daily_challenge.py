# #ex1
# # The goal is to create a class that represents a simple circle.
# # A Circle can be defined by either specifying the radius or the diameter.
# # The user can query the circle for either its radius or diameter.

# # Other abilities of a Circle instance:

# # Compute the circle’s area
# # Print the attributes of the circle - use a dunder method
# # Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# # Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# # Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# # Be able to put them in a list and sort them

# class Circle():
#     def __init__(self, diameter):
#         self.diameter = diameter
#     def circle_area(self):
#         pi=3.1416
#         radius = self.diameter / 2
#         area = pi * (radius ** 2) # cuando el numero es al cuadrado
#         return area
   
#     def __str__(self): ##Print the attributes of the circle - use a dunder method
#         return f"Circle with diameter: {self.diameter}, radius: {self.diameter / 2}, area: {self.circle_area()}"
    
#     def __add__(self, other):
#         if isinstance(other, Circle):  # ensure we are adding two Circle objects
#             new_radius = other.diameter/2
#             return Circle(new_radius)
#         raise TypeError("Can only add two Circle objects")    
#     def __gt__(self, other):
#         if isinstance(other, Circle): 
#             return self.diameter > other.diameter  
#         raise TypeError("Can only compare two Circle objects")
#     def __eq__(self, other):
#         if isinstance(other, Circle):
#             return
#     def __eq__(self, other):
#         if isinstance(other, Circle):  # ensure we are adding two Circle objects
#             return self.diameter == other.diameter 
#         raise TypeError("Can only compare two Circle objects")
#     def __lt__(self, other):
#         if isinstance(other, Circle): 
#             return self.diameter < other.diameter
#         raise TypeError("Can only compare two Circle objects")

# my_circle = Circle(20)
# my_circle2 = Circle(10)
# circle1 = Circle(12) 
# my_circles_list=[my_circle, my_circle2, circle1]

# print(my_circle.circle_area())

# print(my_circle)
# print(my_circle2)
# print(my_circle + my_circle2)
# print(my_circle > my_circle2)


# my_circles_list.sort()
# for circle in my_circles_list:
#     print(circle)
