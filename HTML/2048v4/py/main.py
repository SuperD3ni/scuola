from js import document # type: ignore
import random

def vinci():
    for i in range(16):
        if document.getElementById('d'+str(i))=='2048':
            document.getElementById('vinto').textContent='Hai vinto!'
    return None

def colora():
    for i in range(16):
        div=document.getElementById('d'+str(i))
        if div.textContent=='2':
            div.style.backgroundColor='rgb(255, 255, 255)'
            div.style.color='rgb(119, 110, 101)'
        elif div.textContent=='4':
            div.style.backgroundColor='rgb(236, 224, 200)'
            div.style.color='rgb(119, 110, 101)'
        elif div.textContent=='8':
            div.style.backgroundColor='rgb(243, 178, 122)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='16':
            div.style.backgroundColor='rgb(242, 156, 97)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='32':
            div.style.backgroundColor='rgb(255, 138, 98)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='64':
            div.style.backgroundColor='rgb(204, 88, 48)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='128':
            div.style.backgroundColor='rgb(242, 226, 115)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='256':
            div.style.backgroundColor='rgb(235, 219, 111)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='512':
            div.style.backgroundColor='rgb(234, 218, 111)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='1024':
            div.style.backgroundColor='rgb(232, 217, 110)'
            div.style.color='rgb(255, 255, 255)'
        elif div.textContent=='2048':
            div.style.backgroundColor='rgb(227, 210, 84)'
            div.style.color='rgb(255, 255, 255)'
        else:
            div.style.backgroundColor='rgb(192, 179, 168)'
            div.style.color='rgb(255, 255, 255)'
    return None

def genera():
    numero=random.randint(1, 10)
    generato=0
    while generato==0:
        x=random.randint(0, 15)
        if document.getElementById('d'+str(x)).textContent=="":
            if numero >= 1 and numero <= 8:
                document.getElementById('d'+str(x)).textContent='2'
            else:
                document.getElementById('d'+str(x)).textContent='4'
            generato=1
    colora()
    return None

def su(event):
    mosso=0
    for _ in range(3):
        for i in range(4, 16):
            div=document.getElementById('d'+str(i))
            sopra=document.getElementById('d'+str(i-4))
            if div.textContent==sopra.textContent and sopra.textContent!='' and div.textContent!='2048':
                sopra.textContent=int(div.textContent)+int(sopra.textContent)
                div.textContent=''
                mosso=1
            elif sopra.textContent=='' and div.textContent!='':
                sopra.textContent=div.textContent
                div.textContent=''
                mosso=1
    if mosso==1:
        genera()
    vinci()
    return None

def giu(event):
    mosso=0
    for _ in range(3):
        for i in range(0, 12):
            div=document.getElementById('d'+str(i))
            sotto=document.getElementById('d'+str(i+4))
            if div.textContent==sotto.textContent and sotto.textContent!='' and div.textContent!='2048':
                sotto.textContent=int(div.textContent)+int(sotto.textContent)
                div.textContent=''
                mosso=1
            elif sotto.textContent=='' and div.textContent!='':
                sotto.textContent=div.textContent
                div.textContent=''
                mosso=1
    if mosso==1:
        genera()
    vinci()
    return None

def sx(event):
    mosso=0
    for _ in range(3):
        for i in range(1, 4):
            div=document.getElementById('d'+str(i))
            sinistra=document.getElementById('d'+str(i-1))
            if div.textContent==sinistra.textContent and sinistra.textContent!='' and div.textContent!='2048':
                sinistra.textContent=int(div.textContent)+int(sinistra.textContent)
                div.textContent=''
                mosso=1
            elif sinistra.textContent=='' and div.textContent!='':
                sinistra.textContent=div.textContent
                div.textContent=''
                mosso=1
        for i in range(5, 8):
            div=document.getElementById('d'+str(i))
            sinistra=document.getElementById('d'+str(i-1))
            if div.textContent==sinistra.textContent and sinistra.textContent!='' and div.textContent!='2048':
                sinistra.textContent=int(div.textContent)+int(sinistra.textContent)
                div.textContent=''
                mosso=1
            elif sinistra.textContent=='' and div.textContent!='':
                sinistra.textContent=div.textContent
                div.textContent=''
                mosso=1
        for i in range(9, 12):
            div=document.getElementById('d'+str(i))
            sinistra=document.getElementById('d'+str(i-1))
            if div.textContent==sinistra.textContent and sinistra.textContent!='' and div.textContent!='2048':
                sinistra.textContent=int(div.textContent)+int(sinistra.textContent)
                div.textContent=''
                mosso=1
            elif sinistra.textContent=='' and div.textContent!='':
                sinistra.textContent=div.textContent
                div.textContent=''
                mosso=1
        for i in range(13, 16):
            div=document.getElementById('d'+str(i))
            sinistra=document.getElementById('d'+str(i-1))
            if div.textContent==sinistra.textContent and sinistra.textContent!='' and div.textContent!='2048':
                sinistra.textContent=int(div.textContent)+int(sinistra.textContent)
                div.textContent=''
                mosso=1
            elif sinistra.textContent=='' and div.textContent!='':
                sinistra.textContent=div.textContent
                div.textContent=''
                mosso=1
    if mosso==1:
        genera()
    vinci()
    return None

def dx(event):
    mosso=0
    for _ in range(3):
        for i in range(0, 3):
            div=document.getElementById('d'+str(i))
            destra=document.getElementById('d'+str(i+1))
            if div.textContent==destra.textContent and destra.textContent!='' and div.textContent!='2048':
                destra.textContent=int(div.textContent)+int(destra.textContent)
                div.textContent=''
                mosso=1
            elif destra.textContent=='' and div.textContent!='':
                destra.textContent=div.textContent
                div.textContent=''
                mosso=1
        for i in range(4, 7):
            div=document.getElementById('d'+str(i))
            destra=document.getElementById('d'+str(i+1))
            if div.textContent==destra.textContent and destra.textContent!='' and div.textContent!='2048':
                destra.textContent=int(div.textContent)+int(destra.textContent)
                div.textContent=''
                mosso=1
            elif destra.textContent=='' and div.textContent!='':
                destra.textContent=div.textContent
                div.textContent=''
                mosso=1
        for i in range(8, 11):
            div=document.getElementById('d'+str(i))
            destra=document.getElementById('d'+str(i+1))
            if div.textContent==destra.textContent and destra.textContent!='' and div.textContent!='2048':
                destra.textContent=int(div.textContent)+int(destra.textContent)
                div.textContent=''
                mosso=1
            elif destra.textContent=='' and div.textContent!='':
                destra.textContent=div.textContent
                div.textContent=''
                mosso=1
        for i in range(12, 15):
            div=document.getElementById('d'+str(i))
            destra=document.getElementById('d'+str(i+1))
            if div.textContent==destra.textContent and destra.textContent!='' and div.textContent!='2048':
                destra.textContent=int(div.textContent)+int(destra.textContent)
                div.textContent=''
                mosso=1
            elif destra.textContent=='' and div.textContent!='':
                destra.textContent=div.textContent
                div.textContent=''
                mosso=1
    if mosso==1:
        genera()
    vinci()
    return None

n=random.sample(range(0, 15), 2)
document.getElementById('d'+str(n[1])).textContent=2
document.getElementById('d'+str(n[0])).textContent=2
colora()