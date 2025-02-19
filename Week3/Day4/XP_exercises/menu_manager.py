import psycopg2
from menu import get_connection
from menu import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """Returns a single menu item by name."""
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM menu_items WHERE item_name = %s;", (name,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()
        return result if result else None

    @classmethod
    def all_items(cls):
        """Returns a list of all menu items."""
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM menu_items;")
        items = cursor.fetchall()
        cursor.close()
        connection.close()
        return items
    

# item = MenuItem("Burger", 35)
# # item = MenuItem("Fries", 12)
# item.save()
# print(f"Added item: {item.name}, Price: {item.price}")


# # item.update('Veggie Burger', 37)
# # print(f"Updated item: {item.name}, New Price: {item.price}")


# item.delete()
# print(f"Deleted item: {item.name}")

# # Using MenuManager to fetch items
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all_items()
# print("Fetching item by name:", MenuManager.get_by_name("Burger"))
# print("All menu items:", MenuManager.all_items())
