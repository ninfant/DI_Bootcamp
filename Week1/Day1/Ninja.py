# #exe3 Ninja
# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10

# print("x is", x)
# print("y is", y)
# print("a:", a)
# print("b:", b)

# #exe4 Ninja
# my_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
# print(len(my_text))


#exe5 Ninja

# longest_sentence = 0
# while(True):
#     user_sentence=input('Please enter the longest sentence you can without the character “A”:\n')
#     # check if sentence is valid and is longer
#     if 'A' not in user_sentence and len(user_sentence) > longest_sentence:
#         longest_sentence = len(user_sentence)
#         print("congratulations")  
# 
# 
#    

    
longest_sentence = 0
while(True):
    correct_sentence = True
    user_sentence=input('Please enter the longest sentence you can without the character “A”:\n')
    # check if sentence is valid and is longer
    for value in user_sentence:
        print(value)
        if value == 'A':
            correct_sentence = False
    if correct_sentence and len(user_sentence) > longest_sentence:
        longest_sentence = len(user_sentence)
        print("congratulations")  
