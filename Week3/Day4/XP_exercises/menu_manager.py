import psycopg2

class MenuManager:
    '''This file will contain the MenuManager 
    class that provides class methods for retrieving data from the Menu_Items table.'''
    @classmethod
    def get_by_name(cls, name, db_name="menu_db", user="postgres", password="password", host="localhost", port="5432"):
        """Returns a single menu item by name."""
        with psycopg2.connect(dbname=db_name, user=user, password=password, host=host, port=port) as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
                result = cursor.fetchone()
                return result if result else None

    @classmethod
    def all_items(cls, db_name="menu_db", user="postgres", password="password", host="localhost", port="5432"):
        """Returns a list of all menu items."""
        with psycopg2.connect(dbname=db_name, user=user, password=password, host=host, port=port) as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM Menu_Items")
                return cursor.fetchall()
