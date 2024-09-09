#Costruire un programma python che, data una frase del tipo "esegui questa operazione 23+12" oppure "fai il prodotto 12*4" restituisca il risultato.
#Utilizzare la funzione calcolaRisultato(stringa)
#E' possibile utilizzare la funzione  predefinita eval che valuta un’espressione sotto forma di stringa,
#>>> eval(' 2 * 3')
#6

def calcolaRisultato(stringa):
    lista = stringa.split(" ")
    r = eval(lista[-1])
    return r

print(calcolaRisultato(input("scrivi un calcolo: ")))