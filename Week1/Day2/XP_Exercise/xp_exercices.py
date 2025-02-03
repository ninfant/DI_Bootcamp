
##ex1 
#Add two new numbers to the set
# my_fav_numbers ={1,4,9,3}
# my_fav_numbers.add(2)
# my_fav_numbers.add(5)
# print(my_fav_numbers)
## --- other way ---
# my_fav_numbers ={1,4,9,3}
# my_fav_numbers.update([2,5]) 
# print(my_fav_numbers)


##Remove the last number.
# list_my_fav_num = list(my_fav_numbers)
# list_my_fav_num.pop()
# print(list_my_fav_num)


##Create a set called friend_fav_numbers with your friend’s favorites numbers and 
##Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
# friend_fav_numbers={2,8,7,6}
# our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

##ex2
#No, Tuples are immutable lists, which means items can’t be changed.

#ex3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove('Banana')
# basket.remove('Blueberries')

# basket.append('Kiwi')

# basket.insert(0,'Apples')

# count_apples_basket=basket.count('Apples')
# print(f'We have {count_apples_basket} apples in the basket.')

# print(basket)
# basket.clear()
# print(f'The basket is emplty{basket}')


#ex4
#1)integers: whole numbers objects (no decimals) and floats: Decimal Numbers objects 

# 2)Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence)
# my_list=[]
# for x in range(8): # This will generate for me 8 integer values in total
#     value=x * 0.5 + 1
#     my_list.append(value)
# print(my_list)

##Can you think of another way to generate a sequence of floats?
# my_list2 = []
# num = 1.5
# while num <= 5:
#     my_list2.append(num)
#     num += 0.5
# print(my_list2)

#ex5
#Use a for loop to print all numbers from 1 to 20, inclusive
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index 
# my_list=[]
# for x in range(1,21):
#     my_list.append(x)
#     if my_list.index(x) %2 == 0:
#          print(x)

#ex6
#Write a while loop that will continuously ask the user for their name, unless the input is equal to your name
# my_name='Noilsa'
# while True:
#     user_name= input('What is your name?: ')
#     if user_name == my_name:
#         print('Right name')
#         break
#     else:
#         print('That is not the name, try again')


#ex7
# user_entrance_list=input(' What is your favorite fruits?, please separate the fruits with a single space: ')
# favorite_fruits = user_entrance_list.split()
# user_any_fruit=input('Please enter a name of any other fruit: ')
# if user_any_fruit in favorite_fruits:
#     print('You chose one of your favorite fruits! Enjoy!')
# if user_any_fruit not in favorite_fruits:
#     print('You chose a new fruit. I hope you enjoy!')


#ex8
# pizza_toppings = []
# while True:
#     topping = input("Enter a pizza topping or 'quit' to finish: ")
#     if topping.lower() == 'quit':
#         break
#     pizza_toppings.append(topping)
#     print(f"Adding {topping} to your pizza.")

# price = len(pizza_toppings) * 2.5 + 10
# print("Your pizza will have the following toppings:")
# print(pizza_toppings)
# print(f'The price of your pizza is ${price}')

#ex9
# total_price = 0
# family_ages=input("Please enter the age of each person who wants a ticket in your family: ")
# for age in family_ages.split():
#     if int(age) < 3:
#         price1 = 0
#     elif int(age) > 3 and int(age) < 12:
#         price2 = 10
#     else:
#         price3 = 15
# total_price += price1 + price2 + price3
# print(f'The ticket price for your family is ${total_price}')

# list_of_names = ['John', 'Jane', 'Mary', 'David', 'Sarah']
# not_permitted = []

# for name in list_of_names:
#     age = int(input(f"Please enter the age of {name}: "))
#     if age > 16 or age > 21:
#         not_permitted.append(name)
#         list_of_names.remove(name)
#         print(f"{name} is not permitted to watch the movie.")

# # Print the final list of permitted teenagers
# print("Final list of teenagers permitted to watch the movie:")
# print(list_of_names)

#ex10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# finished_sandwiches=[]
# while True:
#     if "Pastrami sandwich" in sandwich_orders:
#         sandwich_orders.remove("Pastrami sandwich")
#     else:
#         print("No more Pastrami sandwiches!")
#         break

# while sandwich_orders:
#     sandwich = sandwich_orders.pop(0)
#     finished_sandwiches.append(sandwich)
#     print(f"I made your {sandwich}")


