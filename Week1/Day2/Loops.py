#For Loop


#for <variable> in <iteraable/seuqense>:
 #   indented block of code

#Example looping on a sequense(list)
# fruits= ['apple', 'banana', 'Kiwi', 'pear']

# for each_fruit in fruits:
#     print(each_fruit) 


#Example looping on a range for numbers    OJOOOOO revisar de nuevo


#range(start, stop, step)   the defaul start is 0, the stop is not included

#por ejemplo range(8) produces numbers starting from 0 up to 8 (but 8 is not including) 0 to 7

#si solo le pogo un numero hara solo el stop 
# for i in range(5):
#     print(i)

#si solo le pogo un numero hara solo el stop 
# for i in range(1,6): 
#     print(i)



# fruits= ['apple', 'banana', 'kiwi', 'pear']
# for each_fruit in fruits:
#     if each_fruit == fruits[3]:
#         print('this is the last one') 
#     print(each_fruit)

#enumerate() usa el index number of the elements 
# for i, each_fruit in enumerate(fruits):
#     if each_fruit == fruits[3]:
#         print('this is the last one') 
#     print(i, each_fruit)

### No me fucniona 
# for i, each_fruit in enumerate(fruits):
#     if each_fruit == 'kiwi':
#         fruits[i]=='lime'
#     else:
#         print(each_fruit) 
# print(fruits)

#EXERCISE
#accept a numeber from a user an print its multiplication table

# user_number= int(input('Plase enter a number until 10: '))
# for i in range(1,11):
#     print(user_number * i)


#WHILE LOOP
#si usamos --while True-- hay que usar --break---

# counter = 0
# while counter < 5:
#     print(1)
#     counter += 1   # incrementar el contador para que esto no sea infinito

# fruits= ['apple', 'banana', 'kiwi', 'pear']
# i=0
# while i <len(fruits):
#     print(fruits[i])
#     i += 1


pizzas_order=[]
max_pizzas = 5

while len(pizzas_order) < max_pizzas:
    flavor =input('Which flavor (if you finished type "done")')
    if flavor == 'done':
        print('sucessfully added')
        break
    pizzas_order.append(flavor)



#while True: tengo q buscar un mejor ejemplo de esto  OJOOOOO revisar de nuevo
#La expresión while True: en Python crea un bucle infinito, es decir, un bucle que se ejecuta sin fin hasta que se usa una instrucción break para detenerlo.