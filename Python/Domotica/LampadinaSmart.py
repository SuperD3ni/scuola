from DispositivoSmart import DispositivoSmart
class LampadinaSmart(DispositivoSmart):
    def __init__(self, stato=False, consumo=0):
        self.stato = stato
        self.consumo = consumo
    def accendi(self):
        if not self.stato:
            self.stato = True
    def spegni(self):
        if self.stato:
            self.stato = False
    def get_consumo(self):
        return self.consumo if self.stato else 0