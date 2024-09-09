import random
import os
import time

# Initialize the game board
board = [[0]*4 for _ in range(4)]

# Function to print the game board
def print_board():
    os.system('cls' if os.name == 'nt' else 'clear')
    for row in board:
        print(' '.join(str(cell) for cell in row))

# Function to generate a new tile
def gen_tile():
    return 2 if random.random() < 0.9 else 4

# Main game loop
while True:
    # Generate a new tile
    board[random.randint(0, 3)][random.randint(0, 3)] = gen_tile()

    # Print the game board
    print_board()

    # Get user input (up, down, left, right)
    move = input("Enter a direction (W/A/S/D): ")

    # Update the game board based on user input
    # (This is where we'll implement the sliding logic)

    # Add a delay before the next move
    time.sleep(0.5)