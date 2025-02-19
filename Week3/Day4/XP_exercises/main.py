from menu_item import MenuItem
from menu_manager import MenuManager

# Creating and saving a menu item
burger = MenuItem("Burger", 5)
item_id = burger.save()
print(f"Added item with ID {item_id}")

# Updating item price
burger.update(item_id, price=6)
print(f"Updated item {item_id}")

# Deleting the item
burger.delete(item_id)
print(f"Deleted item {item_id}")

# Using MenuManager to fetch items
print("Fetching item by name:", MenuManager.get_by_name("Burger"))
print("All menu items:", MenuManager.all_items())
