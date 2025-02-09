#ejercicio de ejemplo 
class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

aaron = BankAccount(99845, 200)

aaron.deposit(150)

aaron.view_balance()
aaron.withdraw(500)
aaron.view_balance()

aaron.withdraw(180)
aaron.view_balance()

aaron.view_transactions()

aaron.deposit(-900)



#Exercise:
class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year
        self.checked_out = False

    def check_out(self):
        if self.check_out == True:
            print('It is already check out')
        else:
            self.checked_out = True
            print(f'You checked out {self.title} succesfully')

    def check_in(self):
        self.checked_out = False


moby_dick = Book('Moby Dick','Herman Malville', 1851)
moby_dick.check_out()