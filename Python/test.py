import random
prezzo=random.randint(5,9975)

prezzov= prezzo // 5
prezzor= prezzov * 5
print(f"Devi pagare {prezzor} euro ")
eur=int(input (f"Dai i soldi alla cassa -> Numero multiplo di 5 minore di 10000 e maggiore di {prezzor}  ") )


prezzorv=eur - prezzor

if prezzorv == 0:
    print("Non hai resto"  )
if prezzorv < 0:
    print("I soldi non sono abbastanza danne degli altri")
    print(f"Devi pagare {prezzor} euro ")
    eur=int(input (f"Dai i soldi alla cassa -> Numero multiplo di 5 minore di 10000 e maggiore di {prezzor}  ") )


resto=eur- prezzor
restocinq=resto // 50
cifra50=resto % 50
restoven=cifra50 // 20
cifra20=cifra50 % 20
restodie=cifra20 // 10
cifra10=cifra20 % 10
restocin=cifra10 // 5

print(f"Il tuo resto è {resto}")
if restocinq != 0:
    print(f"Le tue banconote da 50 di resto sono: {restocinq}"  )
if restoven != 0:
    print(f"Le tue banconote da 20 di resto sono: {restoven}"  )
if restodie != 0:
    print(f"Le tue banconote da 10 di resto sono: {restodie}"  )
if restocin != 0:
    print(f"Le tue banconote da 5 di resto sono: {restocin}"  )