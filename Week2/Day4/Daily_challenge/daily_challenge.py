# #ex1
# # First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
# # Create a class called Text that takes a string as an argument and store the text in a attribute.
# # Hint: You need to manually copy-paste the text, straight into the code
# # Implement the following methods:
# # a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# # a method that returns the most common word in the text.
# # a method that returns a list of all the unique words in the text.
# class Text():
#     words = []
#     def __init__(self, text: str):
#         self.content = text
#         self.words = self.content.lower().split()

#     def __str__(self):
#         return self.content

#     def frequency_of_a_word(self, word:str):
#         frequency =0
#         words_list = self.content.split()
#         for w in words_list:
#             if w == word:
#                 frequency+=1
#         if frequency>0:
#             return f'The word {word} appears {frequency} times in the sentence'
#         else:
#                 return f'The word {word} is not found in the text'
    
#     def most_common_word(self):
#         if not self.words:
#             raise ValueError("The text is empty. No words to analyze.")

#         word_counts = {}

#         for word in self.words:
#             if word in word_counts:
#                 word_counts[word] += 1
#             else:
#                 word_counts[word] = 1

#         most_common = None
#         max_count = 0

#         for word in word_counts:
#             if word_counts[word] > max_count:
#                 max_count = word_counts[word]
#                 most_common = word

#         return f"The most common word is: {most_common}"

#     def get_unique_words(self):
#         unique_words = []
#         all_words = []
#         for word in self.words:
#             if word not in all_words:
#                 unique_words.append(word)
#             elif word in unique_words: 
#                 # verify it was not remove already in case the word is repeated multiple times
#                 unique_words.remove(word)
#             all_words.append(word)
#         return unique_words
    
#     @classmethod
#     def from_file(cls, file_name):
#         with open(file_name, encoding = 'utf-8') as f:
#             file_content = f.read()
#         return Text(file_content)

# my_text = Text("A good book would sometimes cost as much as a good house")
# my_text2= Text("The dog chased the cat and the cat ran away while the dog kept barking at the cat")
# # print(my_text.content)

# # print(my_text.frequency_of_a_word('book'))
# # print(my_text2.frequency_of_a_word('the'))
# # print(my_text2.most_common_word())
# # print(my_text.get_unique_words())
# # print(my_text2.get_unique_words())
# print(Text.from_file("the_stranger.txt"))
            
        


