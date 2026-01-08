from DispositivoSmart import DispositivoSmart
class TermostatoSmart(DispositivoSmart):
    def __init__(self, target_temp=20, stato=False, consumo_watt=0):
        self.target_temp = target_temp
        self.stato = stato
        self.consumo_watt = consumo_watt
    def accendi(self):
        if not self.stato:
            self.stato = True
    def spegni(self):
        if self.stato:
            self.stato = False
    def get_consumo(self):
        return self.consumo_watt if self.stato else 0
    def test_sensore(self):
        print("il sensore e sigma")
    def test_wifi(self):
        print("il wifi e sigma")