
def display_board(board): 
    matrix_frame = '***************'
    matrix_separator = '* ---|---|--- *'
    print(matrix_frame)
    for row_index in range(3):
       row_values = " | ".join(board.get(row_index)) 
       row = f"*  {row_values}  *"
       print(row)
       if row_index < 2:
        print(matrix_separator)
    print(matrix_frame)

def player_turn(player_key):
   """
   @param player_key: X or 0
   @return [boolean]: True if player finish his turn, False in case the player need to do it again
   """

   user_row=int(input('Enter row number: ')) - 1
   user_column=int(input('Enter column number: ')) - 1
   if user_row >= 3 or user_column >= 3:
        print ("Row and column numbers must be less than 4, try again: ")
        return False
   elif board[user_row][user_column] != " ":
        print('Invalid entry, please try again!')
        return False
   else:
        board[user_row][user_column] = player_key # set the X or 0 values in the board
        return True

def check_winner(board):
    """
    Checks if there is a winner in the Tic-Tac-Toe game.
    @param board: The game board dictionary
    @return: 'X', 'O' if a player wins, 'Tie' if no spaces remain, or None if the game is still ongoing.
    """
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] and board[i][0] != " ":
            return board[i][0]  # Row win
        if board[0][i] == board[1][i] == board[2][i] and board[0][i] != " ":
            return board[0][i]  # Column win

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
        return board[0][0]  # Main diagonal win
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != " ":
        return board[0][2]

# Check if there are any empty spaces left
    if any(" " in row for row in board.values()):
        return None  # Game is still ongoing

    return "Tie"  # No empty spaces left, it's a tie



def play():
   print('WELCOME TO TIC TAC TOE') 
   dict_players={"X":"Player1",
                 "0":"Player2"}
   while True:
        for player_key, player_name in dict_players.items():
            display_board(board)
            print(f'{player_name} is your turn, please make your move: ')
            finished_turn = player_turn(player_key) 
            while not finished_turn: # if the player didnt finish his turn, will continue playing until does
                finished_turn = player_turn(player_key)
            
            winner = check_winner(board)
            if winner:
                display_board(board)
                if winner == "Tie":
                    print("It's a Tie!")
                else:
                    print(f"Congratulations! {dict_players[winner]} ({winner}) wins!")
                return  



board = {
    0: [" ", " ", " "],
    1: [" ", " ", " "],
    2: [" ", " ", " "]
}

play()

#To the checker: 
#was not easy to do it, I got very stuck in the check_winner funtion part but with some help i did it.

