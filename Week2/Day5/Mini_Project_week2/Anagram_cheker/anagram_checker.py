
# # # First Download this text file
# # # Create a new file called anagram_checker.py which contains a class called AnagramChecker.
# # # 
# # # The class should have the following methods:
# # # __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# # # is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
# # # get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
# # # 
# # # Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
# # # Note: None of the methods in the class should print anything.
# # # Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
# # # 
# # # It should do the following:
# # # Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
# # # If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# # # Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# # # Only alphabetic characters are allowed. No numbers or special characters.
# # # Whitespace should be removed from the start and end of the user’s input.
# # # Once your code has decided that the user’s input is valid, it should find out the following:
# # # All possible anagrams to the user’s word.
# # # Create an AnagramChecker instance and apply it to the steps created above.
# # # 
# # # Display the information about the word in a user-friendly, nicely-formatted message such as:
# # # YOUR WORD :”MEAT”
# # # this is a valid English word.
# # # Anagrams for your word: mate, tame, team.

# class AnagramChecker():
    
#     def __init__(self, words_file):
#         """Loads the text file into a variable."""
#         self.word_list=[]
#         try:
#             with open(words_file, 'r', encoding='utf-8') as file:
#              self.word_list = file.read().lower().splitlines()
#         except FileNotFoundError:
#             print(f"Error: The file '{words_file}' was not found.")
#         except Exception as e:
#             print(f"An error occurred while loading the word list: {e}")
    
#     def is_anagram(self, word1, word2):
#         if sorted(word1.lower())==sorted(word2.lower()):
#             return True
#         else:
#             return False 
    
#     def get_anagrams(self, word):
#         anagrams_given_word_list =[]
#         try:
#                 if word.lower() not in self.word_list:
#                     raise ValueError (f"'{word}' is not in the word list.")
#                 for new_anagram in self.word_list:
#                      if self.is_anagram(word, new_anagram) and word.lower() != new_anagram.lower():
#                         anagrams_given_word_list.append(new_anagram)
#         except ValueError as e:
#             print(e)    
#         return anagrams_given_word_list





# # checker = AnagramChecker("sowpods.txt")

# # # print(checker.word_list)

# # # print(checker.is_anagram('silent', 'listen'))

# # # print(checker.get_anagrams('listen'))