import random
#ex1
# def display_message():
#     print('I am learning Full Stuck Developer')

# display_message()

#ex2
# def favorite_book(tittle):
#     print(f"One of my favorite books is {tittle}")

# favorite_book('Alice in Wonderland')

#ex3
# def describe_city(name_city, country='Iceland'):
#     print(f"{name_city} is in {country}")
          
# describe_city('Reykjavik')


#ex4
# num =0
# def random_number(number:int):
#     global num
#     if 1 <= number <= 100:
#         num = random.randint(1,100)
#         if number == num:
#             print('Lucky! same numbers')
#         else:
#             print(f'The entered number {number} and the random number {num} are not that lucky to be the same number')
#     else:
#         print('Please enter a number between 1 and 100')


# random_number(78)

##----------------------------------------------
#ex5
# def make_shirt(size:str, text:str):
#     print(f"The size of the shirt is {size} and the text is {text}")

# make_shirt('M', "I love nature")


# def make_shirt(size:str = 'Large', text:str = 'I love Python' ):
#      print(f"The size of the shirt is {size} and the text is {text}")

# make_shirt()


# def make_shirt(size:str, text:str = 'I love Python' ):
#      print(f"The size of the shirt is {size} and the text is {text}")

# make_shirt('Medium')


# def make_shirt(size:str, text:str):
#      print(f"The size of the shirt is {size} and the text is {text}")

# make_shirt('Small', 'Dogs are cute')

##----------------------------------------------

#ex6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magician_names:list):
#     for name in magician_names:
#         print(name)

# show_magicians(magician_names)


# def make_great():
#     for i, magician in enumerate(magician_names):
#         magician_names[i]= f'The Great {magician}'

# make_great()
# print(magician_names)


#ex7
##----------------------------------------------------
# def get_random_temp():
#     num = random.randint(-10, 40)
#     return num   

# print(get_random_temp())


# def main():
#     value = get_random_temp()
#     return f'The temperature right now is {value} degrees Celsius.'

# main()

#4) 
# temp =0
# def get_random_temp(season):
#     global temp
#     if season == 'Winter':
#         temp = random.randint(-10, 16)
#     elif season == 'Spring':
#         temp = random.randint(10, 25)
#     elif season == 'Autumn':
#         temp = random.randint(10, 25)
#     elif season == 'Summer':
#         temp = random.randint(25, 40) 
#     return temp
    

# #print(get_random_temp('Winter'))

# def main():
#     user_entrance =input('Please enter your favorite season: ').capitalize()
#     value = get_random_temp(user_entrance)
#     if value <= 0:
#         return 'Brrr, thats freezing! Wear some extra layers today'
#     elif 0 <= value <= 16:
#         return'Quite chilly! Dont forget your coat'
#     elif 16 <= value <= 23:
#         return 'Much better now'
#     elif 24 <= value <= 32:
#         return 'It is hot'
#     else:
#         return 'Too hot'

# print(main())


# #ex8
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
# def star_wars_quiz():
#     wrong_answers =[]
#     correct = 0
#     not_correct = 0 
#     for item in data:
#         user_answer = input(item["question"] + " ").strip()
#         correct_answer = item["answer"]
#         wrong_answers.append(user_answer)

#         if user_answer.lower() == correct_answer.lower():
#             print("Correct!")
#             correct += 1
#         else:
#             print(f"Incorrect! The correct answer is: {correct_answer}\n")
#             not_correct +=1
#     return f'Your correct answers so far are: {correct} and not correct {not_correct}'

# print(star_wars_quiz())