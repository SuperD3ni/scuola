#Costruire una lista inserendo nomi di animali, fiore, cose. Scorrere la lista e chiedere per ogni elemento la sua categoria di appartenenza.
#Costruire una funzione che inserita una categoria restituisca una lista con i nomi appartenenti a quella categoria.

def nomiAppartenenti(lista, c):
    i = 0
    animali = []
    fiore = []
    cose = []
    output = []
    for i in range(len(lista)):
        categoria = input(f"di che categoria fa parte {lista[i]}?: ")
        match categoria:
            case "animali":
                animali.append(lista[i])
            case "fiore":
                fiore.append(lista[i])
            case "cose":
                cose.append(lista[i])
            case _:
                print("errore")
    match c:
        case "animali":
            output = animali
        case "fiore":
            output = fiore
        case "cose":
            output = cose
    return output

lista = ['cane', 'gatto', 'viola', 'rosa', 'tastiera', 'tazza']
c = input("scegli una categoria: ")
print(f"le cose appartenenti a questa categoria sono: {nomiAppartenenti(lista, c)}")