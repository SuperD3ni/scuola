class Carbone:
    def __init__(self, colore, quantita):
        self.colore = colore
        self.quantita = quantita

    def __str__(self):
        return f"Carbone: colore: {self.colore}, quantita: {self.quantita}"