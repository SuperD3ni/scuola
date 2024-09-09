'''Data una lista con i nomi e le età degli studenti
e.
studenti=["Mario","Rossi",19,"Luca","Bianchi",23,"Maria","Rosati",17,...]

costruire una la funzione minorenni(lista) che restituisca una lista con i nomi degli studenti minorenni.'''

def minorenni(lista):
    nomi_minorenni = []

    for i in range(0, len(lista), 3):
        nome = lista[i]
        cognome = lista[i+1]
        eta = lista[i+2]
        
        if eta < 18:
            nomi_minorenni.append(nome)
    
    return nomi_minorenni

studenti = ["Mario", "Rossi", 19, "Luca", "Bianchi", 23, "Maria", "Rosati", 17, "Giovanni", "Rossi", 13, "Mario", "Massimo", 16]
minorenni_lista = minorenni(studenti)
print("Studenti minorenni:", minorenni_lista)
