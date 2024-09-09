
from js import document
import random

parole=['TAVOLO', 'GRUPPO', 'SPORCO', 'FABBRO', 'MACACO', 'NAPOLI']
parola=parole[random.randint(0, 5)]
punteggio=0
penalita=0
i=0
punti=document.getElementById('punti')
tentativi=0

for x in parola:
    div=document.getElementById('d'+str(i))
    div.textContent=x
    div.style.color='transparent'
    i+=1

def verifica(event):
    global punteggio
    global tentativi
    tentativi+=1
    risposta=document.getElementById('risposta')
    for x in risposta.value:
        for i in range(6):
            div=document.getElementById('d'+str(i))
            if div.textContent==x and div.style.color=='transparent':
                div.style.color='white'
                punteggio+=50
    punti.textContent=punteggio
    if punteggio+penalita==300 or tentativi==3:
        for i in range(6):
            div=div=document.getElementById('d'+str(i))
            div.style.backgroundColor='yellow'
            div.style.color='white'
            if penalita>punteggio:
                punti.textContent='hai perso'
            else:
                punti.textContent=punteggio-penalita
                


def aiuto(event):
    global penalita
    if event.target.style.color=='transparent':
        event.target.style.color='white'
        penalita+=50
    if punteggio+penalita==300:
        for i in range(6):
            div=div=document.getElementById('d'+str(i))
            div.style.backgroundColor='yellow'
            if penalita>punteggio:
                punti.textContent='hai perso'
            else:
                punti.textContent=punteggio-penalita