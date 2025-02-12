# import random
# #ex1
# # Create a function called get_words_from_file. This function should read the file’s content 
# # and return the words as a collection. What is the correct data type to store the words?

# # Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# # use the words list to get your random words.
# # the amount of words should be the value of the length parameter.

# # Take the random words and create a sentence (using a python method), the sentence should be lower case.
# # Create a function called main which will:
# # Print a message explaining what the program does.
# # Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# # If the user inputs incorrect data, print an error message and end the program.
# # If the user inputs correct data, run your code.


# words = []
# def get_words_from_file(filename):
#     try:
#         with open(filename, encoding='utf-8') as f:
            
#             for line in f:
#                 words.append(line.strip())  # Removes newline and extra spaces
#         return words
#     except FileNotFoundError:
#         print(f"Error: The file '{filename}' was not found.")
#         return []


# words = get_words_from_file("word_list.txt")
# # print(words)

# ###
# def get_random_sentence(length):
#     list_a=[]
#     for _ in range(length):
#         word=random.choice(words)
#         list_a.append(word)
#     return list_a

# # print(get_random_sentence(8))
# ########
# def main():
#     print('This method take a random words and create a sentence')
#     try:
#         my_sentense = []
#         user_input= int(input('how long they want the sentence to be? (2-20 words): '))
#         if not 2 <= user_input <= 20:
#             print("Error: Input must be between 2 and 20.")
#             return
#         else:
#             for words in get_random_sentence(user_input):
#                 my_sentense.append(words.lower())
#             return " ".join(my_sentense)        
#     except ValueError:
#         print("Error: Invalid input. Please enter an integer.")
#         return
# # print(main())


# #ex2
# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.


# import json

# # JSON as a string
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""


# data = json.loads(sampleJson) # Convert the JSON string to a Python dictionary

# salary = data["company"]["employee"]["payable"]["salary"]
# print(f"Salary: {salary}")

# # Add the "birth_date" key at the same level as "name"
# data["company"]["employee"]["birth_date"] = "1990-05-15"  # You can change the date


# with open("updated_data.json", "w") as json_file: # Save the updated JSON to a file
#     json.dump(data, json_file, indent=4)

# print("Updated JSON saved to 'updated_data.json'")

