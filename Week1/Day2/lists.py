my_name= 'Jack'
hello ='Hello World'
my_age = 27

my_list=[my_name, hello, my_age]
print(my_list)


#list syntax, a list is a sequence 
numbers=[1,2,3,4,5,6]
print(numbers)


#ordered data structure = we can use index
print(numbers[3])


#mutable = I can change it, eliminara lo que hay en esa posicion y adicionara el nuevo valor
numbers[3]=55
print(numbers)

#list methods 

#Append will alwys add in the end of the list 
student=['Harry', 'Ron', 'Hermione']
student.append('Luna')
print(student)


#Insertar necesito pasarle el index(position) and the value i want to insert,
#inserta y hace la lista mas larga
student.insert(1,'Jenny')
print(student)


#Remove solo pasarle el value de lo que quiero eliminar
student.remove('Ron',)
print(student)

#Pop() siempore elimina el ultimo elemento de la lista por defecto, 
# sino debes pasarle el index que quieres eliminar
student.pop()


#EXERCISE
#Given this list:
list1=[5,10,15,20,25,50,20]
# print index 3
# change 50 to 70
# delete number 20
# add a new number to the end of the list

print(list1[3])

list1[5]=70
print(list1)

list1.remove(20)
print(list1)

list1.append(67)
print(list1)


#Method to check after the class
#copy()
#extend()
#clear()
#index()
#sort()
#sorted()
#reverse()
#count()


