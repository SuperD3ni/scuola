import pickle
from dataclasses import dataclass

@dataclass
class StudentePagante:
    nome: str
    cognome: str
    eta: int
    prezzo: float

def calcola_prezzo(eta):
    if eta < 18:
        return 6.0
    else:
        return 8.0

try:
    with open("classi.txt", "r") as classesf, open("indice.txt", "w") as indexf:
        line = classesf.readline()
        pos = classesf.tell()
        while line:
            if line[0].isdigit():
                class_name = line.strip("\n")
                indexf.write(f"{class_name}-{pos}\n")
            line = classesf.readline()
            pos = classesf.tell()
    
    chosen_class = input("Inserisci il nome di una classe (es. 1P, 2P, 3P, 4P, 1A, ecc.): ")
    
    found_class = False
    class_position = -1
    
    with open("indice.txt", "r") as indexf:
        for line in indexf:
            if line.startswith(chosen_class):
                class_position = int(line.split('-')[1].strip('\n'))
                found_class = True
                break
    
    if not found_class:
        print(f"Errore: la classe '{chosen_class}' non è stata trovata.")
    else:
        studenti_paganti = []
        with open("classi.txt", "r") as classesf:
            classesf.seek(class_position)
            
            line = classesf.readline()
            while line and not line[0].isdigit():
                parts = line.strip().split()
                if len(parts) >= 3:
                    nome = parts[0]
                    cognome = parts[1]
                    eta = int(parts[2])
                    
                    prezzo_biglietto = calcola_prezzo(eta)
                    
                    studente = StudentePagante(nome=nome, cognome=cognome, eta=eta, prezzo=prezzo_biglietto)
                    studenti_paganti.append(studente)
                line = classesf.readline()
                
            output_filename = f"biglietti_{chosen_class}.pkl"
            with open(output_filename, "wb") as pklf:
                pickle.dump(studenti_paganti, pklf)
                
            print(f"File '{output_filename}' creato con successo!")
            print("Dati serializzati:")
            for studente in studenti_paganti:
                print(f"  - Nome: {studente.nome}, Età: {studente.eta}, Prezzo: €{studente.prezzo}")
            
except FileNotFoundError as e:
    print(f"Errore: uno dei file necessari non è stato trovato. Assicurati che 'classi.txt' esista.")
    print(f"Dettagli: {e}")
except Exception as e:
    print(f"Si è verificato un errore inaspettato: {e}")
