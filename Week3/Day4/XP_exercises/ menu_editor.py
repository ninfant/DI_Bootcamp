import psycopg2
from menu import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nRestaurant Menu Editor")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")
        
        choice = input("Choose an option: ").upper()
        
        if choice == "V":
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            print(item if item else "Item not found.")
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "E":
            print("Exiting program...")
            break
        else:
            print("Invalid choice, please try again.")

def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter item name to remove: ")
    item = MenuItem(name, 0)
    try:
        item.delete()
        print("Item was deleted successfully.")
    except:
        print("Error: Item could not be deleted.")

def update_item_from_menu():
    name = input("Enter item name to update: ")
    price = int(input("Enter current item price: "))
    new_name = input("Enter new item name: ")
    new_price = int(input("Enter new item price: "))
    item = MenuItem(name, price)
    try:
        item.update(new_name=new_name, new_price=new_price)
        print("Item was updated successfully.")
    except:
        print("Error: Item could not be updated.")

def show_restaurant_menu():
    menu = MenuManager.all_items()
    print("\nRestaurant Menu:")
    for item in menu:
        print(f"{item[1]} - ${item[2]}")

if __name__ == "__main__":
    show_user_menu()
