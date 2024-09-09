# sapendo che il numero di giornate  in cui è consentito il superamento del limite di concentrazione di PM10 mensile è 3 ,scrivere un programma Python che visualizzi le città che hanno superato il limite nel mese di febbraio.

citta = ["Ferrara-VillaFulvia", 7, "Cento", 9, "Ravenna-Zalamella", 11, "Faenza", 6, "ReggioEmilia-Timavo", 12, "Bologna-ViaChiarini", 4, "SanLeo", 3, "PorrettaTerme-Castelluccio", 0]
cittaInquinate = []

for i in range(1, len(citta), 2):
    if citta[i] > 3:
        cittaInquinate.append(citta[i - 1])

print("le citta che superano il limite di PM10 mensile di 10 sono:", cittaInquinate)