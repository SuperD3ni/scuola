lista=["latte", 24, "uova", 33, "farina", 12, "pane", 13, "mouse", 22, "tastiera", 19, "cuffie", 7, "casse", 26, "pentole", 17, "ferro da stiro", 27, "ventilatore", 8, "frullatore", 30]

alimentari={"latte", "uova", "farina", "pane"}

elettronica={"mouse", "tastiera", "cuffie", "casse"}

casalinghi={"pentole", "ferro da stiro", "ventilatore", "frullatore"}

#Creare una funzione( calcolaLimiti())  che calcoli gli indici di inizio e fine della segueza di prodotti e quantità relative ad un particolare reparto:

#esempio:

#per calcolare gli indici di inizio e fine dei prodotti alimentari scrivere:

#limiteInf,LimiteSup=calcolaLimiti(alimentari,lista)

def calcolaLimiti(reparto, lista):
    i = 0
    LimiteInf = -1
    LimiteSup = -1
    for i in range(len(lista)):
        if lista[i] in reparto:
            if LimiteInf == -1:
                LimiteInf = i
            LimiteSup = i
            
    return LimiteInf, LimiteSup

LimiteInf, LimiteSup = calcolaLimiti(elettronica, lista)

print("Indice di inizio dei prodotti alimentari:", LimiteInf)
print("Indice di fine dei prodotti alimentari:", LimiteSup)