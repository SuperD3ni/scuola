from LampadinaDimmerabile import LampadinaDimmerabile
from VecchioVentilatore import VecchioVentilatore
from TermostatoSmart import TermostatoSmart

def attiva_dispositivo(oggetto):
    try:
        oggetto.accendi()
    except:
        print("ogeto non ah metodio")
    
def esegui_diagnostica(device):
    for nome_attributo in dir(device):
        if nome_attributo.startswith("test_"):
            metodo = getattr(device, nome_attributo)
            metodo()

lampadina = LampadinaDimmerabile()

# lampadina.accendi() 
# un metodo chiamato uguale a uno vecchio sovrascrive quello vecchio, basta mettere valori di default ai paramteri: def accendi(self, intensita=0)

ventilato = VecchioVentilatore()

stringa = "sigma"

list = [lampadina, ventilato, stringa]

for obj in list:
    attiva_dispositivo(obj)

termostato = TermostatoSmart()

esegui_diagnostica(termostato)