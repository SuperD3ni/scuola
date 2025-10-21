import pickle
from Persona import Persona

# la banca che gestisce i clienti
class Banca:
    def __init__(self, nome_banca):
        self.nome_banca = nome_banca
        self.clienti = []
    def aggiungi_cliente(self, persona):
        self.clienti.append(persona)
    def cerca_cliente_da_carta(self, codice_carta):
        for cliente in self.clienti:
            if cliente.carta.codice_carta == codice_carta:
                return cliente
    def salva_dati(self, file):
        with open(file, "wb") as f:
            pickle.dump(self, f)
    def carica_dati(self, file):
        with open(file, "rb") as f:
            o = pickle.load(f)
            self.clienti = o.clienti
            self.nome_banca = o.nome_banca