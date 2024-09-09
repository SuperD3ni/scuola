'''n un magazzino sono presenti quantità diverse di 5 tipi di frutta.
      inserire in una lista il peso dei 5 tipi di frutta calcolato casualmente( valore compreso tra 10 e 30)
      i 5 pesi devono essere distinti.
     
      Costruire una funzione che, inserito il peso e la capacità dei sacchetti, restituisca il numero di sacchetti confezionati e il peso della frutta rimasta. 
Il programma dovrà visualizzare il peso della frutta rimasta in magazzino.'''
import random

capacita_sacchetto = int(input("inserisci la capacità: "))

pesi = []
for i in range(5):
    peso = random.randint(10, 30)
    pesi.append(peso)
def confeziona_frutta(pesi, capacita_sacchetto):
    sacchetti = 1
    frutta_rimasta = 0
    for peso in pesi:
        if peso <= capacita_sacchetto:
            capacita_sacchetto -= peso
        else:
            frutta_rimasta += peso
            sacchetti += 1
    if sacchetti > 5:
        sacchetti = 5

    return sacchetti, frutta_rimasta


sacchetti, frutta = confeziona_frutta(pesi, capacita_sacchetto)

print(pesi)
print(f"sacchetti usati: {sacchetti} frutta rimasta: {frutta}kg")