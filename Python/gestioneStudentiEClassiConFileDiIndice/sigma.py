'''Parte 1: Creazione del File Dati (classi.txt)

Scrivi uno script Python che crei un file chiamato classi.txt. Questo file dovrà contenere l'elenco di quattro classi (1P, 2P, 3P, 4P) e i loro studenti, seguendo questo formato:

    Una riga con il nome della classe.

    Le righe successive con nome e cognome di ogni studente di quella classe.

    Si ripete lo schema per la classe successiva.

Esempio di classi.txt:

1P
Mario Rossi
Luigi Bianchi
Anna Verdi
2P
Paolo Neri
Sara Gialli
Marco Blu
3P
... (e così via per 3P e 4P)

Parte 2: Creazione del File Indice (indice.txt)

Scrivi un secondo script (o continua il precedente) che legga il file classi.txt appena creato e generi un file di indice chiamato indice.txt.

    Per ogni classe trovata in classi.txt, il file indice.txt dovrà contenere una riga con il nome della classe e la posizione (in byte) in cui quella riga inizia all'interno di classi.txt.

    Il formato deve essere nome_classe-posizione.

Esempio di indice.txt:

1P-0
2P-42
...

(Nota: I numeri di posizione sono solo indicativi e dipenderanno dal contenuto esatto del tuo file classi.txt)

Parte 3: Ricerca e Visualizzazione Studenti

Scrivi un programma finale che:

    Chieda all'utente di inserire il nome di una classe (es. "2P").

    Legga il file indice.txt per trovare la posizione di partenza di quella classe.

    Se la classe non è presente nell'indice, stampi un messaggio di errore.

    Se la classe è presente, utilizzi il metodo seek() per saltare direttamente a quella posizione nel file classi.txt.

    Legga e stampi a schermo il nome della classe e l'elenco dei suoi studenti, fermandosi prima dell'inizio della classe successiva o alla fine del file.'''

#conta che il file classi ci sia gia'

try:
    with open("classi.txt", "r") as classesf, open("indice.txt", "w") as indexf:
        line = classesf.readline()
        pos = classesf.tell()
        while line:
            if line[0].isdigit():
                line = line.strip("\n")
                indexf.write(f"{line}-{pos}\n")
            line = classesf.readline()
            pos = classesf.tell()
        
    chosen_class = input("Inserisci il nome di una classe (e.g. 1P, 2P, 3P, 4P): ")
    with open("indice.txt", "r") as indexf, open("classi.txt", "r") as classesf:
        line = indexf.readline()
        lf = True
        while line:
            if line.startswith(chosen_class):
                classesf.seek(int(line.split('-')[1].strip('\n')))
                lf=False
            line = indexf.readline()
        if lf:
            print('Errore: classe non trovata')
        else:
            line = classesf.readline()
            while line:
                print(line)
                line = classesf.readline()
                if line[0].isdigit():
                    line = None


except IOError as e:
    print(f"I/O error: can't write in file '{indexf}'.")
    print(f"Details: {e}")
except Exception as e:
    print(f"An unexpected error has occurred: {e}")