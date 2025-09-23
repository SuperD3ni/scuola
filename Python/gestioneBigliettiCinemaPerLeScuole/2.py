import pickle
from dataclasses import dataclass

@dataclass
class StudentePagante:
    nome: str
    cognome: str
    eta: int
    prezzo: float

def genera_comunicazione(classe, studenti):
    """Crea una comunicazione testuale per la classe."""
    filename = f"comunicazione_{classe}.txt"
    with open(filename, "w", encoding='utf-8') as output:
        output.write(f"*** Comunicazione per la classe {classe} ***\n\n")
        output.write("Gentili studenti,\n")
        output.write(f"Di seguito trovate il riepilogo dei costi per la gita al cinema.\n\n")
        
        for studente in studenti:
            output.write(f"- Studente: {studente.nome} {studente.cognome}\n")
            output.write(f"  Prezzo del biglietto: {studente.prezzo:.2f} euro\n\n")
            
        output.write("Si prega di versare l'importo richiesto al più presto.\n")
        output.write("Grazie per la collaborazione.\n")
        output.write("La Segreteria Scolastica")
    
    print(f"\nComunicazione generata con successo in '{filename}'.")

try:
    chosen_class = input("Inserisci il nome della classe per cui hai ricevuto i dati (es. 1P, 2P, 3A): ")
    filename = f"biglietti_{chosen_class}.pkl"
    with open(filename, "rb") as pkl_file:
        studenti_caricati = pickle.load(pkl_file)
        
    if studenti_caricati:
        print(f"Dati della classe '{chosen_class}' caricati con successo.")
        genera_comunicazione(chosen_class, studenti_caricati)
    else:
        print(f"Il file '{filename}' non contiene dati validi.")

except Exception as e:
    print(f"Si è verificato un errore imprevisto: {e}")