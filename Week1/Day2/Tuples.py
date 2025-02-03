#Tuples: Tuples are immutable lists, which means items can’t be changed, and they are ordered
#usualmente usado para passwords, 
# siempre van en mas de un elemento, con un elemento no es una tuple

# To create a tuple, use parentheses:
numbers = (10, 20, 30, 40)
print(numbers)

#methods
#count cuenta cuantos del valor que le pasaste tiene la Tuple
print(numbers.count(20))

#index imprime el index del valor que le pasaste 
print(numbers.index(30))


#concatenete tu[ples
numbers2=(2,3,5,7)
mixed_tuples=numbers+numbers2
print(mixed_tuples)


#unpacking the Tuple or the variable 
a,b,c,d=(5,10,15,20)
print(a)
print(b)
print(c)
print(d)

#THIS IS NOTTT a tuple, but we can unpack varaible of any type in python 
name, age, email='Juliana', 27, 'ju@gmail.com'
print(name)
print(age)
print(email)


#EXERCISE
#Unpack the following tuple into 4 variables
a_tuple = (10, 20, 30, 40)
a,b,c,d=a_tuple
print(a)
print(b)
print(c)
print(d)
