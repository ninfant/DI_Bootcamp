#exercise
# Given a list of numbers, write a function that returns the sum of every number. 
# BUT you can have a malicious string inside the list.

# my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
# total = 0

# for i, item in enumerate(my_list):
#     try:
#         if not isinstance(item, str):  # If it's NOT a string
#             total += item 
#         else:
#             raise TypeError(f"Item at index {i} is a string, skipping.")

#     except TypeError as e:
#         print(e)  # Print error but continue the loop

# print("Total sum:", total)


# #Exercise
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage = int(userage)
        valid_flag = True
    except:
        print("Please enter a real age")

print("Next year, your age will be",userage+1)

# #Exercise
# def string_multiplaier(thing, num):
#     try:
#         print(thing + num)
#     except:
#         print(thing * num)
#     finally:
#         print('All done')


# string_multiplaier('ffff', 23)
# string_multiplaier(9, 7)