import tkinter as tk
import pickle

# Classi
# formatta la transazione in una stringa leggibile
class Transazione:
    def __init__(self, data_ora = "N/A", tipo_operazione = "N/A", importo = 0, saldo_post_operazione = 0):
        self.data_ora = data_ora
        self.tipo_operazione = tipo_operazione
        self.importo = importo
        self.saldo_post_operazione = saldo_post_operazione
    def __str__(self):
        return f"[{self.data_ora}] {self.tipo_operazione}: +{self.importo:.2f} EUR | Saldo: {self.saldo_post_operazione:.2f} EUR"

# il contocorrente che gestisce le varie transazioni e il saldo
class ContoCorrente:
    def __init__(self, iban, saldo, lista_movimenti = []):
        self.iban = iban
        self.saldo = saldo
        self.lista_movimenti = lista_movimenti
    def deposita(self, importo):
        if importo > 0:
            self.saldo += importo
            transazione = Transazione("N/A", "Versamento", importo, self.saldo)
            self.lista_movimenti.append(transazione)
    def preleva(self, importo):
        if importo <= self.saldo and importo > 0:
            self.saldo -= importo
            transazione = Transazione("N/A", "Prelievo", importo, self.saldo)
            self.lista_movimenti.append(transazione)
        else:
            print("Fondi insufficienti")
    def get_saldo(self):
        return self.saldo
    def get_lsita_movimenti(self):
        return self.lista_movimenti

# la carta di una persona, associata a un conto
class BancomatPersonale:
    def __init__(self, codice_carta, pin, conto_associato):
        self.codice_carta = codice_carta
        self.pin = pin
        self.conto_associato = conto_associato
    def verifica_pin(self, pin_inserito):
        if pin_inserito == self.pin:
            return True

# persona che possiede la carta
class Persona:
    def __init__(self, nome, cognome, carta):
        self.nome = nome
        self.cognome = cognome
        self.carta = BancomatPersonale()

# la banca che gestisce i clienti
class Banca:
    def __init__(self, nome_banca, clienti = []):
        self.nome_banca = nome_banca
    def aggiungi_cliente(self, persona):
        self.clienti.append(persona)
    def cerca_cliente_da_carta(self, codice_carta):
        for cliente in self.clienti:
            if cliente.carta.codice_carta == codice_carta:
                return cliente
    def salva_dati(self, file):
        print("Salvataggio dati non implementato")
    def carica_dati(self, file):
        print("Caricamento dati non implementato")