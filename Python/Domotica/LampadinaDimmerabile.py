from LampadinaSmart import LampadinaSmart
class LampadinaDimmerabile(LampadinaSmart):
    def __init__(self, stato=False, consumo=0):
        super().__init__(stato, consumo)
    def accendi(self, intensita):
        super().accendi()
        self.intensita = intensita
        print(f"Lampadina accesa con intensità {self.intensita}")