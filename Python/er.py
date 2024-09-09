import random
import numpy as np

def init_game():
    board = np.zeros((4, 4), dtype=int)
    add_random_tile(board)
    add_random_tile(board)
    return board

def add_random_tile(board):
    empty_cells = [(i, j) for i in range(4) for j in range(4) if board[i, j] == 0]
    if empty_cells:
        i, j = random.choice(empty_cells)
        board[i, j] = random.choice([2, 4])

def compress(board):
    new_board = np.zeros((4, 4), dtype=int)
    for i in range(4):
        pos = 0
        for j in range(4):
            if board[i, j] != 0:
                new_board[i, pos] = board[i, j]
                pos += 1
    return new_board

def merge(board):
    for i in range(4):
        for j in range(3):
            if board[i, j] == board[i, j + 1] and board[i, j] != 0:
                board[i, j] *= 2
                board[i, j + 1] = 0
    return board

def reverse(board):
    new_board = np.zeros((4, 4), dtype=int)
    for i in range(4):
        new_board[i] = board[i][::-1]
    return new_board

def transpose(board):
    return np.transpose(board)

def move_left(board):
    new_board = compress(board)
    new_board = merge(new_board)
    new_board = compress(new_board)
    return new_board

def move_right(board):
    new_board = reverse(board)
    new_board = compress(new_board)
    new_board = merge(new_board)
    new_board = compress(new_board)
    new_board = reverse(new_board)
    return new_board

def move_up(board):
    new_board = transpose(board)
    new_board = move_left(new_board)
    new_board = transpose(new_board)
    return new_board

def move_down(board):
    new_board = transpose(board)
    new_board = move_right(new_board)
    new_board = transpose(new_board)
    return new_board

def move_diag_up_left(board):
    new_board = np.zeros((4, 4), dtype=int)
    for i in range(1, 4):
        for j in range(1, 4):
            if board[i, j] != 0:
                k, l = i, j
                while k > 0 and l > 0 and new_board[k-1, l-1] == 0:
                    new_board[k-1, l-1] = board[k, l]
                    new_board[k, l] = 0
                    k -= 1
                    l -= 1
                if k > 0 and l > 0 and new_board[k-1, l-1] == new_board[k, l]:
                    new_board[k-1, l-1] *= 2
                    new_board[k, l] = 0
    return new_board

def move_diag_up_right(board):
    new_board = np.zeros((4, 4), dtype=int)
    for i in range(1, 4):
        for j in range(2, -1, -1):
            if board[i, j] != 0:
                k, l = i, j
                while k > 0 and l < 3 and new_board[k-1, l+1] == 0:
                    new_board[k-1, l+1] = board[k, l]
                    new_board[k, l] = 0
                    k -= 1
                    l += 1
                if k > 0 and l < 3 and new_board[k-1, l+1] == new_board[k, l]:
                    new_board[k-1, l+1] *= 2
                    new_board[k, l] = 0
    return new_board

def move_diag_down_left(board):
    new_board = np.zeros((4, 4), dtype=int)
    for i in range(2, -1, -1):
        for j in range(1, 4):
            if board[i, j] != 0:
                k, l = i, j
                while k < 3 and l > 0 and new_board[k+1, l-1] == 0:
                    new_board[k+1, l-1] = board[k, l]
                    new_board[k, l] = 0
                    k += 1
                    l -= 1
                if k < 3 and l > 0 and new_board[k+1, l-1] == new_board[k, l]:
                    new_board[k+1, l-1] *= 2
                    new_board[k, l] = 0
    return new_board

def move_diag_down_right(board):
    new_board = np.zeros((4, 4), dtype=int)
    for i in range(2, -1, -1):
        for j in range(2, -1, -1):
            if board[i, j] != 0:
                k, l = i, j
                while k < 3 and l < 3 and new_board[k+1, l+1] == 0:
                    new_board[k+1, l+1] = board[k, l]
                    new_board[k, l] = 0
                    k += 1
                    l += 1
                if k < 3 and l < 3 and new_board[k+1, l+1] == new_board[k, l]:
                    new_board[k+1, l+1] *= 2
                    new_board[k, l] = 0
    return new_board

def print_board(board):
    print('-' * 25)
    for row in board:
        print('|' + '|'.join(f'{num:^5}' if num != 0 else '     ' for num in row) + '|')
        print('-' * 25)

def check_game_over(board):
    if any(0 in row for row in board):
        return False
    for i in range(4):
        for j in range(4):
            if j < 3 and board[i, j] == board[i, j + 1]:
                return False
            if i < 3 and board[i, j] == board[i + 1, j]:
                return False
    return True

def main():
    board = init_game()
    print_board(board)
    while True:
        move = input("Enter move (w/a/s/d/q/e/z/c): ").strip().lower()
        if move == 'w':
            board = move_up(board)
        elif move == 's':
            board = move_down(board)
        elif move == 'a':
            board = move_left(board)
        elif move == 'd':
            board = move_right(board)
        elif move == 'q':
            board = move_diag_up_left(board)
        elif move == 'e':
            board = move_diag_up_right(board)
        elif move == 'z':
            board = move_diag_down_left(board)
        elif move == 'c':
            board = move_diag_down_right(board)
        else:
            print("Invalid move! Use 'w', 'a', 's', 'd', 'q', 'e', 'z', or 'c'.")
            continue
        add_random_tile(board)
        print_board(board)
        if check_game_over(board):
            print("Game Over!")
            break

if __name__ == "__main__":
    main()
