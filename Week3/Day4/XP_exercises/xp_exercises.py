import psycopg2
# import requests
# import json
# import random


connection =psycopg2.connect(database='ToTest2',
                              user='noi',
                             password='noinoi86*',
                             host='localhost',
                             port='5432')
cursor = connection.cursor()
cursor.execute('''CREATE TABLE Menu_Items 
               (item_id SERIAL PRIMARY KEY, 
               item_name VARCHAR(30) NOT NULL, 
               item_price SMALLINT DEFAULT 0)''')

# cursor.execute(''' ''')

connection.commit()
print('DATA WAS INSERTED SUCESSFULLY')