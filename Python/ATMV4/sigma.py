import os
import random
from Banca import Banca
from Persona import Persona
from AtmApp import AtmApp

# Imposta la directory corrente
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# main
try:
    banca = Banca("BancaSigma")
    if os.path.isfile("banca_dati.pkl"):
        banca.carica_dati("banca_dati.pkl")
        # Istanziamento di AtmApp con l'istanza di banca
        sportello = AtmApp(banca) 
        # Aggiunta di un check per evitare IndexError nel caso non ci siano clienti dopo il caricamento
        if banca.clienti:
            # Stampa delle credenziali di accesso (solo a scopo di test)
            if len(banca.clienti) >= 2:
                print(banca.clienti[0].carta.codice_carta, banca.clienti[0].carta.pin, banca.clienti[1].carta.codice_carta, banca.clienti[1].carta.pin)
            else:
                print(banca.clienti[0].carta.codice_carta, banca.clienti[0].carta.pin)
    else:
        # Creazione di clienti di esempio se il file non esiste
        cliente1 = Persona("Mario", "Rossi")
        cliente2 = Persona("Anna", "Verdi")
        banca.aggiungi_cliente(cliente1)
        banca.aggiungi_cliente(cliente2)
        print(f"Creato cliente: {cliente1.nome} {cliente1.cognome}, Carta: {cliente1.carta.codice_carta}, PIN: {cliente1.carta.pin}")
        print(f"Creato cliente: {cliente2.nome} {cliente2.cognome}, Carta: {cliente2.carta.codice_carta}, PIN: {cliente2.carta.pin}")
        
        banca.salva_dati("banca_dati.pkl")
        # Istanziamento di AtmApp con l'istanza di banca
        sportello = AtmApp(banca)
except Exception as e:
    print(f"Errore nel caricamento dei dati o nell'esecuzione: {e}")