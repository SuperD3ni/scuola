import random

pagare = random.randint(1, 100) * 5

print(f"Somma da pagare: {pagare} euro")

pagato = int(input("Inserisci il totale della somma di denaro versata: "))

if pagato < pagare:
    print("La somma versata è inferiore a quella da pagare.")
else:
    resto = pagato - pagare


print(f"Resto: {resto} euro")

banconota_50 = resto // 50
resto = resto % 50
banconota_20 = resto // 20
resto = resto % 20
banconota_10 = resto // 10
resto = resto % 10
banconota_5 = resto // 5

if banconota_50 > 0:
    print(f"{banconota_50} banconote da 50 euro")
if banconota_20 > 0:
    print(f"{banconota_20} banconote da 20 euro")
if banconota_10 > 0:
    print(f"{banconota_10} banconote da 10 euro")
if banconota_5 > 0:
    print(f"{banconota_5} banconote da 5 euro")

