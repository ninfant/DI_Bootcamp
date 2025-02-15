# from game import Game

# def get_user_menu_choice():
#     while True:
#         print('  Menu:')
#         print('  (g) Play a new game')
#         print('  (x) Show score and exit')
#         user_choice=input(': ')
#         if not user_choice.isalpha():
#             print('Please select the right option')
#         elif user_choice not in ('g', 'x'):
#             print('Please enter one of the two options ')
#         else:
#             return user_choice.lower()
            
                
# def print_results(results):
#     print(f"""
#         Game Results:
#         You won {results.get('win')} times   
#         You lost {results.get('loss')} times   
#         You drew {results.get('draw')} times   
#     """)

# def main():
#     try:
#         game = Game()
#         choice = get_user_menu_choice()
#         while(choice == 'g'):
#             game.play()
#             choice = get_user_menu_choice()
#         print_results(game.results)
#     except Exception as e:
#         print(f"An error has ocurred, message: {str(e)}")
# main()
