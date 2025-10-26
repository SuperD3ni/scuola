from BancomatPersonale import BancomatPersonale

# persona che possiede la carta
class Persona:
    def __init__(self, nome, cognome):
        self.nome = nome
        self.cognome = cognome
        self.carta = BancomatPersonale()