import random
class Game():
    results={
        "win": 0,
        "loss": 0,
        "draw": 0
    }

    def get_user_item(self):
        user_entry = input('Select (r)ock, (p)aper or (s)cissors: ').strip()
        while True:
            if not user_entry.isalpha():
                user_entry = input('Enter the right option:(r)ock, (p)aper or (s)cissors: ').strip()
            elif user_entry not in ('r', 'p', 's'):
                user_entry = input('Please enter: (r)ock, (p)aper or (s)cissors: ').strip()
            else:
                option_selected = user_entry.lower()  #.split()
                return option_selected
            
    def get_computer_item(self):
         list_options=['r', 's', 'p']
         compute_choice= random.choice(list_options)
         return compute_choice
    def get_game_result(self, user_item, computer_item):
        if user_item == 'r' and computer_item == 's':
             print('You selected rock. The computer selected scissors. You won')
             self.results['win'] += 1
             return f'win'
        elif user_item == 's' and computer_item == 'p':
             print('You selected scissors. The computer selected paper. You won')
             self.results['win'] += 1
             return f'win'
        elif user_item == 'p' and computer_item == 'r':
             print('You selected paper. The computer selected rock. You won')
             self.results['win'] += 1
             return f'win'
        elif computer_item == 'r' and user_item == 's':
             print('The computer selected rock. You selected scissors. You loss')
             self.results['loss'] += 1
             return f'loss'
        elif computer_item == 's' and user_item == 'p':
             print('The computer selected scissors. You selected paper. You loss')
             self.results['loss'] += 1
             return f'loss'
        elif computer_item == 'p' and user_item == 'r':
             print('The computer selected paper. You selected rock. You loss')
             self.results['loss'] += 1
             return f'loss'
        elif computer_item == user_item:
             self.results['draw'] += 1
             print('You selected same item as the computer. You drew!')
             return f'drew'
    def play(self):
         user_item_store=game.get_user_item()
         computer_item_store =game.get_computer_item()
         return game.get_game_result(user_item_store, computer_item_store)
        
    
game = Game()
# print(game.get_user_item())
# print(game.get_computer_item())
# print(game.play())