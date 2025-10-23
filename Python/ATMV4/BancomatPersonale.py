import random
from ContoCorrente import ContoCorrente

# la carta di una persona, associata a un conto
class BancomatPersonale:
    def __init__(self):
        self.codice_carta = random.randint(10**15, 10**16 - 1)
        self.pin = random.randint(10**4, 10**5 - 1)
        self.conto_associato = ContoCorrente()
    def verifica_pin(self, pin_inserito):
        if pin_inserito == self.pin:
            return True