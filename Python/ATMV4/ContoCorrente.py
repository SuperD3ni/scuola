import random
from Transazione import Transazione

# il contocorrente che gestisce le varie transazioni e il saldo
class ContoCorrente:
    def __init__(self):
        self.iban = random.randint(10**10, 10**11 - 1)
        self.saldo = 0
        self.lista_movimenti = []
    def deposita(self, importo):
        if importo > 0:
            self.saldo += importo
            transazione = Transazione("Versamento", importo, self.saldo)
            self.lista_movimenti.append(transazione)
    def preleva(self, importo):
        if importo <= self.saldo and importo > 0:
            self.saldo -= importo
            transazione = Transazione("Prelievo", importo, self.saldo)
            self.lista_movimenti.append(transazione)
        else:
            print("Fondi insufficienti")
    def get_saldo(self):
        return self.saldo
    def get_lista_movimenti(self):
        return self.lista_movimenti