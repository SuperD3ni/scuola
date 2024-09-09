citta = ["Ferrara-VillaFulvia", 7, "Cento", 9, "Ravenna-Zalamella", 11, "Faenza", 6, "ReggioEmilia-Timavo", 12, "Bologna-ViaChiarini", 4, "SanLeo", 3, "PorrettaTerme-Castelluccio", 0]
supLimite = []

i = 1
for i in range(1, len(citta), 2):
    if citta[i] > 3:
        supLimite.append(citta[i - 1])

print(supLimite)