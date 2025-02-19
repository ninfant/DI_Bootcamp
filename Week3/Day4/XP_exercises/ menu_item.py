import psycopg2

class MenuItem:
    '''This file will contain the MenuItem class that handles inserting,
      updating, deleting, and retrieving menu items.'''
    def __init__(self, name, price, db_name="menu_db", user="postgres", password="password", host="localhost", port="5432"):
        self.name = name
        self.price = price
        self.db_name = db_name
        self.user = user
        self.password = password
        self.host = host
        self.port = port
        self.create_table()

    def create_table(self):
        """Creates the Menu_Items table if it does not exist."""
        with psycopg2.connect(dbname=self.db_name, user=self.user, password=self.password, host=self.host, port=self.port) as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    '''CREATE TABLE IF NOT EXISTS Menu_Items (
                        item_id SERIAL PRIMARY KEY,
                        item_name VARCHAR(30) NOT NULL,
                        item_price SMALLINT DEFAULT 0
                    )'''
                )
                conn.commit()

    def save(self):
        """Inserts the current menu item into the table."""
        with psycopg2.connect(dbname=self.db_name, user=self.user, password=self.password, host=self.host, port=self.port) as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id",
                    (self.name, self.price)
                )
                item_id = cursor.fetchone()[0]
                conn.commit()
                return item_id

    def delete(self, item_id):
        """Deletes a menu item by its ID."""
        with psycopg2.connect(dbname=self.db_name, user=self.user, password=self.password, host=self.host, port=self.port) as conn:
            with conn.cursor() as cursor:
                cursor.execute("DELETE FROM Menu_Items WHERE item_id = %s", (item_id,))
                conn.commit()
                return cursor.rowcount

    def update(self, item_id, name=None, price=None):
        """Updates the name and/or price of a menu item."""
        with psycopg2.connect(dbname=self.db_name, user=self.user, password=self.password, host=self.host, port=self.port) as conn:
            with conn.cursor() as cursor:
                if name and price:
                    cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s", (name, price, item_id))
                elif name:
                    cursor.execute("UPDATE Menu_Items SET item_name = %s WHERE item_id = %s", (name, item_id))
                elif price:
                    cursor.execute("UPDATE Menu_Items SET item_price = %s WHERE item_id = %s", (price, item_id))
                else:
                    return 0  # No update performed
                conn.commit()
                return cursor.rowcount

    def fetch_all(self):
        """Fetches all menu items."""
        with psycopg2.connect(dbname=self.db_name, user=self.user, password=self.password, host=self.host, port=self.port) as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM Menu_Items")
                return cursor.fetchall()
