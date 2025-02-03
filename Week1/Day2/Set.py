
#Set = it is unordered data structure, dont need to be ordered, pero cuando usas print, te lo imprime ordenados
my_set={1,4,8,9}
my_set=set() #To create a set, you can also use the set() function

#add() function
my_set.add(12)
print(my_set)


print(my_set[1])

#aqui elimina de esta lista los numeros q se repiten y solo deja uno de esos numeros repetidos 
id_numbers=[123,56,3333,65,77,123,556,123]
unique_ids=set(id_numbers)
print(unique_ids)


#intersection
names={'Juliana', 'Israel', 'Dina'}
coutrys={'USA', 'Brazil', 'Israel'}
print(names.intersection(coutrys))

# #union
names_and_countries =names.union(coutrys)
print(names_and_countries)

# #difference
print(coutrys.difference(names))

#clear() en un set() elimina TODOS los elementos del conjunto
# No toma argumentos.
# Borra todos los elementos del conjunto.
# El set queda vacío (set()).

#EXERCISE

my_set2={3,4,5,6,8}
my_set3={4,2,0,1,5}

#add a new number
my_set2.add(99)
print(my_set2)

#finds the common betwen two sets
print(my_set2.intersection(my_set3))

#remove all elements from the first set you created(for me my_set2)
my_set2.clear()
print(my_set2)
print(my_set3)



