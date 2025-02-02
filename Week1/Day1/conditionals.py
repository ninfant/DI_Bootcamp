# my_city = 'Ramat Gan'

# if my_city != 'Ramat Gan':
#     print(f'I love {my_city}')

# print('Finish')


#------Syntax of if statement -----  
#if (keyword) (condition) :
     #indentation + block of code  

# more complex
#if (keyword) (condition) :
     #indentation + block of code 

#elif(keyword) (condition) :
     #indentation + block of code 

#else:
     #indentation + block of code 

# Note: indentation: Paython esto significa dejar un espacio
# en el if saltará a la siguiente condicion solo si la primera es falsa, 
# por tanto hay q poner la mas compleja primero asegurandote que la analice
# ver el #Excersice 2
#--------------------


#Excersice 1
# name=input('What is your name? ')
# my_name='Noilsa'

# if name == my_name:
#     print('We have the same name')
# elif name == 'Daniel':
#     print('Beautiful name')
# else:
#     print('We have differents the same name')

#Excersice 2
user_name_int=int(input('Enter a number between 1 and 100: '))

if user_name_int / 3==0 or user_name_int / 5==0:
    print('FizzBuzz')
elif user_name_int / 5==0:
    print('Buzz')

elif user_name_int / 3==0:
    print('Fizz')

else:
    print('nada')