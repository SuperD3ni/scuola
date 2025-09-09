try:
    with open("text.txt", 'r') as fp:
        list=fp.readlines()
        lines = [line.strip('\n') for line in list]
        if "LUCA BIANCHI" in lines:
            print("presente")
        else:
            print("assente")

except FileNotFoundError:
    print("file not found")
except Exception as e:
    print(f"An error has occurred while reading the file: {e}")