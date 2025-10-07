class Salvadanaio: #classe Salvadanaio
    def __init__(self, soldi=0, ):
        self.soldi = soldi
    def aggiungi(self, somma):
        if somma >= 0:
            self.soldi += somma
    def mostra_saldo(self):
        return self.soldi
    def svuota(self):
        self.soldi = 0

class Fratello: #classe Fratello
    def __init__(self, nome, cognome, Salvadanaio):
        self.nome = nome
        self.cognome = cognome
        self.salvadanaio = Salvadanaio #stessa istanza per ogni fratello
    def metti_soldi(self, somma):
        self.salvadanaio.aggiungi(somma)
    def controlla_risparmi(self):
        return self.salvadanaio.mostra_saldo()

def main():
    soldi_iniziali = int(input("Inserisci la somma iniziale nel salvadanaio: ")) 
    salvadanaio = Salvadanaio(soldi_iniziali)
    fratello1 = Fratello("Mario", "Rossi", salvadanaio)
    fratello2 = Fratello("Luigi", "Verdi", salvadanaio)
    soldi_da_aggiungere1 = input("Inserisci la somma da aggiungere al salvadanaio (fratello1): ")
    fratello1.metti_soldi(int(soldi_da_aggiungere1))
    soldi_da_aggiungere2 = input("Inserisci la somma da aggiungere al salvadanaio (fratello2): ")
    fratello2.metti_soldi(int(soldi_da_aggiungere2))
    print(fratello1.controlla_risparmi())

main()