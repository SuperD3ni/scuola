import random
visitatori=random.sample(range(10,500),365)

def giorniTrascorsi(mese):
    giorni=0
    match mese:
        case '1':
            giorni = 0
        case '2':
            giorni = 31
        case '3':
            giorni = 60
        case '4':
            giorni = 91
        case '5':
            giorni = 121
        case '6':
            giorni = 152
        case '7':
            giorni = 182
        case '8':
            giorni = 213
        case '9':
            giorni = 244
        case '10':
            giorni = 274
        case '11':
            giorni = 305
        case '12':
            giorni = 335
        case '13':
            giorni = 366
        case _:
            print("errore")
    return giorni
   
def numeroVisitatori(dataIn,dataFin):
 
    giornoi,mesei=dataIn.split("/")
   
    giorniTracorsi1=giorniTrascorsi(mesei)
   
    giorniTracorsi1+=int(giornoi)
    giornof,mesefi=dataFin.split("/")
    giorniTracorsi2=giorniTrascorsi(mesefi)
    giorniTracorsi2+=int(giornof)
    return visitatori[giorniTracorsi1-1:giorniTracorsi2]

print(numeroVisitatori("1/1","31/12"))

mesex="gennaio"
dataIn=""
dataFin=""
match mesex:
        case 'gennaio':
            dataIn="1/1"
            dataFin="31/1"
        case 'febbraio':
            dataIn="1/2"
            dataFin="29/2"
        case 'marzo':
            dataIn="1/3"
            dataFin="31/3"
        case 'aprile':
            dataIn="1/4"
            dataFin="30/4"
        case 'maggio':
            dataIn="1/5"
            dataFin="31/5"
        case 'giugno':
            dataIn="1/6"
            dataFin="30/6"
        case 'luglio':
            dataIn="1/7"
            dataFin="31/7"
        case 'agosto':
            dataIn="1/8"
            dataFin="31/8"
        case 'settembre':
            dataIn="1/9"
            dataFin="30/9"
        case 'ottobre':
            dataIn="1/10"
            dataFin="31/10"
        case 'novembre':
            dataIn="1/11"
            dataFin="30/11"
        case 'dicembre':
            dataIn="1/12"
            dataFin="31/12"
        case _:
            print("errore")
       
print(numeroVisitatori(dataIn,dataFin))
