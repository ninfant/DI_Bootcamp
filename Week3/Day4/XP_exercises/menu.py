import psycopg2

def get_connection():
    return psycopg2.connect(
        database='ToTest2',
        user='xxx',
        password='xxx',
        host='localhost',
        port='5432'
    )

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price 

    def save(self):
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s);", 
                       (self.name, self.price))
        connection.commit()
        cursor.close()
        connection.close()

    def delete(self):
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("DELETE FROM menu_items WHERE item_name = %s;", (self.name,))
        connection.commit()
        cursor.close()
        connection.close()

    def update(self, new_name=None, new_price=None):
        connection = get_connection()
        cursor = connection.cursor()
        
        if new_name and new_price is not None:
            cursor.execute("UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s;", 
                           (new_name, new_price, self.name))
        elif new_name:
            cursor.execute("UPDATE menu_items SET item_name = %s WHERE item_name = %s;", 
                           (new_name, self.name))
        elif new_price is not None:
            cursor.execute("UPDATE menu_items SET item_price = %s WHERE item_name = %s;", 
                           (new_price, self.name))
        
        connection.commit()
        cursor.close()
        connection.close()
