import pickle
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Studenti: 
    def __init__(self, nome, cognome, matricola):
        self.nome = nome
        self.cognome = cognome
        self.matricola = matricola

    def __str__(self):
        return f"{self.nome} {self.cognome}, Matricola: {self.matricola}"
    
try:
    with open("studenti.csv", "r") as file:
        for line in file:
            matricola, nome, cognome = line.strip("\n").split(",")
            studente = Studenti(nome, cognome, matricola)
            with open("studenti.dat", "a") as output_file:
                pos = file.tell()
                pickle.dump((studente), output_file)
            with open("indice.txt", "ab") as index_file:
                index_file.write(f"{matricola},{pos}\n")
    matricola_richiesta = input("Inserisci la matricola dello studente da cercare: ")
    with open("indice.txt", "r") as index_file:
        found = False
        for line in index_file:
            if line.startswith(matricola_richiesta):
                pos = int(line.strip("\n").split(",")[1])
                found = True
        if found == False:
            print("Matricola non trovata")
    with open("studenti.dat", "rb") as output_file:
        output_file.seek(pos)
        studente = pickle.load(output_file)
        print(studente)
except FileNotFoundError:
    print("file not found")
except Exception as e:
    print(f"An error occurred: {e}")
