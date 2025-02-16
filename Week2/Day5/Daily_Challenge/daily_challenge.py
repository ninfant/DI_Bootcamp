#ex1
# --What is a class?--
# It’s a blueprint for creating objects, defining their data and functions
# --What is an instance?--
# A specific object created from a class
# --What is encapsulation?--
# Keeping data and functions inside a class and controlling access to them
# --What is abstraction?--
# Showing only what’s necessary and hiding internal details
# --What is inheritance?--
# When a class takes features and functions from another class
# --What is multiple inheritance?--
# When a class inherits from more than one class at the same time
# --What is polymorphism?--
# When the same method works differently depending on the class
# --What is MRO (Method Resolution Order)?--
# The order in which Python looks for a method when multiple inheritance is used

#ex2
# Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit 
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}" 


class Deck:

    def __init__(self):
        self.cards = []
        self.create_deck()
        self.shuffle()
        
    def create_deck(self):
        """Creates the 52 cards in the deck."""
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
       
        for suit in suits:
            for value in values:
                card = Card(suit, value)  ##Card object
                self.cards.append(card)  
   
    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if self.cards:
            return self.cards.pop()
        else:
            return None 
deck = Deck() 
# print(deck.cards) 
print(deck.deal()) 
print(len(deck.cards))
deck.shuffle()