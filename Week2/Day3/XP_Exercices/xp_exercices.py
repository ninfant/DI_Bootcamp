# # #ex1
# # class Currency:
# #     def __init__(self, currency, amount):
# #         self.currency = currency
# #         self.amount = amount

# #     def __str__(self):
# #         """string representation of the currency object"""
# #         return f'{self.amount} {self.currency}'
    
# #     def __int__(self):
# #         """returns the amount as an integer"""
# #         return self.amount
    
# #     def __repr__(self):
# #         """returns the same as __str__"""
# #         return self.__str__() 
   
# #     def __add__(self, other):
# #         """Handles addition between Currency objects and integers."""
# #         if isinstance(other, int):  # Adding an integer to the amount
# #             return self.amount + other
# #         elif isinstance(other, Currency):  # Adding two Currency objects
# #             if self.currency != other.currency:
# #                 raise TypeError("Cannot add between Currency type <dollar> and <shekel>")
# #             return self.amount + other.amount
# #         else:
# #             raise TypeError("Unsupported type for addition")
    
# #     def __iadd__(self, other):
# #         """Handles in-place addition (c1 += value)"""
# #         if isinstance(other, int):  # If adding an integer
# #             self.amount += other
# #         elif isinstance(other, Currency):  # If adding another Currency object
# #             if self.currency != other.currency:
# #                 raise TypeError("Cannot add two different currencies")
# #             self.amount += other.amount
# #         else:
# #             raise TypeError("Unsupported type for addition")
# #         return self 
    
        

# # c1 = Currency('dollar', 5)
# # c2 = Currency('dollar', 10)
# # c3 = Currency('shekel', 1)
# # c4 = Currency('shekel', 10)




# # print(str(c1))
# # print(int(c1))
# # print(repr(c1))


# # print(c1+5)
# # print(c1+c2)

# # print(c1)

# # c1+=5
# # print(c1)

# # c1+=c2
# # print(c1)

# # print(c1+c3)

# #ex2
# # I have two Python files, the module one is called func.py and contains the following code:
# # def add_numbers(x, b):
# #     result = x + b
# #     print(print("The sum is:", result))

# # The second Python file, where I call the module, is named my_exercise.py, and I use it like this:
# # import func
# # func.add_numbers(3, 5)



# #ex3 Generate random String of length 5
# # Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# # Hint: use the string module
# import string
# import random


# def generate_random_string(length=5):
#     # Define the characters that can be used in the random string
#     characters = string.ascii_letters
#     # Generate a random string of specified length
#     return ''.join(random.choice(characters) for a in range(length))

# print(generate_random_string())


# # ex4 Create a function that displays the current date.
# # Hint : Use the datetime module.

# from datetime import datetime

# print(datetime.now())  # current datetime

# # utc version
# from datetime import datetime, timezone

# utc_now = datetime.now(timezone.utc)
# print(utc_now)


# # ex5 
# # Create a function that displays the amount of time left from now until January 1st.
# # (Example: the 1st of January is in 10 days and 10:34:01hours).
# from datetime import datetime


# def time_until_2026():
#     current_date = datetime.now()
#     future_date = datetime(2026, 1, 1)
#     time_until = future_date - current_date  # version classic

#     # parsed version
#     days = time_until.days
#     seconds = time_until.seconds
#     hours, remainder = divmod(seconds, 3600)
#     minutes, seconds = divmod(remainder, 60)

#     return f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours"


# print(time_until_2026())

# # #ex6 Birthday and minutes
# # Create a function that accepts a birthdate as an argument (in the format of your choice), 
# # then displays a message stating how many minutes the user lived in his life.

# from datetime import datetime


# def minutes_lived(user_birthday):
#     """
#     Calculate how many minutes the user lived in his life
#     @param user_birthday: datetime
#     """
#     # calculate how many minutes the user lived in his life
#     current_date = datetime.now()
#     time_lived = current_date - user_birthday
#     return time_lived.total_seconds() // 60

# user_birthday = datetime(1986, 12, 11)
# print(f"The user has lived {minutes_lived(user_birthday)} minutes in their life.")
# #note:
# # The // operator in Python is the floor division operator.
# # It performs division but rounds down the result to the nearest whole number (integer).

# # ex7 faker module
# # from faker import Faker


# # def generate_users(number):
# #     users = []
# #     fake = Faker()
# #     for a in range(number):
# #         users.append({
# #             'name': fake.name(),
# #             'address': fake.address(),
# #             'language_code': fake.language_code(),
# #         })
# #     return users


# # print(generate_users(10))
