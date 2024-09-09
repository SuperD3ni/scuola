#Costruire una lista di 81 posizioni con il numero di visitatori di un museo. Costruire una funzione che passata la data di inizio e la data di fine in formato stringa es. ("12/2") , restituisca una lista con il numero di visitatori giornalieri relativa a quel periodo e il giorno (es. "22 febbraio") con il maggior numero di visitatori.
#Dare all'utente la possibilità di inserire il periodo attraverso l'insrimento della data di inizio e la data di fine , oppure inserendo il nome del mese (gennaio,febbraio , marzo). Se si inserisce un mese diverso , visualizzare la frase "Mese non presente".
#Se si inserisce un nome errato visualizzare la frase: "errore di inserimento"
import random

def giorniPassati(mese):
    giorni=0
    match mese:
        case '1':
            giorni = 0
        case '2':
            giorni = 31
        case '3':
            giorni = 60
        case _:
            print("errore")
    return giorni
   
def visitatori(dataI,dataF):
 
    giornoi,mesei = dataI.split("/")
   
    giorniPassati1 = giorniPassati(mesei)
   
    giorniPassati1 += int(giornoi)
    giornof,mesef = dataF.split("/")
    giorniPassati2 = giorniPassati(mesef)
    giorniPassati2 += int(giornof)
    return listaVisitatori[giorniPassati1 -1: giorniPassati2]

listaVisitatori=random.sample(range(10,500),81)

print(visitatori(input("data inizio: "),input("data fine: ")))

mesen = "gennaio"
dataI = ""
dataF = ""
match mesen:
        case 'gennaio':
            dataI="1/1"
            dataF="31/1"
        case 'febbraio':
            dataI="1/2"
            dataF="29/2"
        case 'marzo':
            dataI="1/3"
            dataF="21/3"
        case _:
            print("errore")
       
print(visitatori(dataI,dataF))
