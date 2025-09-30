import pickle
from dataclasses import dataclass
import os

@dataclass
class StudentePagante:
    nome: str
    cognome: str
    eta: int
    prezzo: float

def genera_comunicazione(classe, studenti, cartella_output="cartella_output", modello_file="modello.txt"):
    
    filename = os.path.join(cartella_output, f"comunicazione_{classe}.txt")
    
    try:
        with open(modello_file, "r", encoding='utf-8') as mod_file:
            modello_comunicazione = mod_file.read()
    except FileNotFoundError:
        print(f"Errore: Il file modello '{modello_file}' non è stato trovato.")
        return

    elenco_studenti = ""
    for studente in studenti:
        elenco_studenti += (
            f"- Studente: {studente.nome} {studente.cognome}\n"
            f"  Prezzo del biglietto: {studente.prezzo:.2f} euro\n\n"
        )
    
    comunicazione_finale = modello_comunicazione.replace("{{CLASSE}}", classe)
    comunicazione_finale = comunicazione_finale.replace("{{ELENCO_STUDENTI}}", elenco_studenti)

    with open(filename, "w", encoding='utf-8') as output:
        output.write(comunicazione_finale)
    
    print(f"\nComunicazione generata con successo in '{filename}'.")

try:
    chosen_class = input("Inserisci il nome della classe per cui hai ricevuto i dati (es. 1P, 2P, 3A): ")
    
    output_folder = "cartella_output"
    filename_pkl = os.path.join(output_folder, f"biglietti_{chosen_class}.pkl")
    
    with open(filename_pkl, "rb") as pkl_file:
        studenti_caricati = pickle.load(pkl_file)
        
    if studenti_caricati:
        print(f"Dati della classe '{chosen_class}' caricati con successo.")
        genera_comunicazione(chosen_class, studenti_caricati, cartella_output=output_folder)
    else:
        print(f"Il file '{filename_pkl}' non contiene dati validi.")

except FileNotFoundError:
    print(f"Errore: Uno dei file necessari non è stato trovato (es. '{filename_pkl}' o 'modello.txt').")
except Exception as e:
    print(f"Si è verificato un errore imprevisto: {e}")