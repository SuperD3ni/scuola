'''
Lo scopo di questo esercizio è creare un'applicazione "ibrida" in cui un'interfaccia grafica (GUI) sviluppata in Python controlla due distinti programmi Java per la lettura e la scrittura di dati su un file CSV.

Immagina di dover costruire un semplice sistema di anagrafica. L'interfaccia utente sarà gestita da Python con la libreria Tkinter, ma la logica di accesso ai file (lettura e scrittura) sarà delegata a due programmi Java separati. Python dovrà essere in grado di:

    Eseguire un programma Java per salvare nuovi dati (nome, cognome, età) passandoglieli come argomenti da riga di comando.

    Eseguire un altro programma Java per leggere tutti i dati esistenti, catturando l'output che il programma Java stampa sulla console.

Dovrai creare 3 file principali e un file di dati.

1. File Dati: utenti.csv

    Sarà un semplice file di testo. Ogni riga rappresenta un utente.

    I campi (nome, cognome, età) sono separati da un punto e virgola (;).

    Esempio:

    Mario;Rossi;30
    Laura;Bianchi;25

Lo Scrittore Java (progetti/scrittura/src/App.java)

    Deve essere un programma Java che accetta tre argomenti dalla riga di comando (il String[] args del metodo main).

    Questi argomenti saranno: args[0] (nome), args[1] (cognome), args[2] (età).

    Il programma deve aggiungere in fondo, non sovrascrivere, una nuova riga al file utenti.csv.

    La riga aggiunta deve essere formattata come nome;cognome;eta.

    Dopo aver scritto, deve stampare un messaggio di conferma su console, ad esempio: Utente [nome] salvato con successo..

    Componente 2: Il Lettore Java (progetti/lettura/src/App.java)

    Deve essere un programma Java che non accetta argomenti.

    Deve leggere l'intero contenuto del file /utenti.csv.

    Per ogni riga letta dal file, deve stamparla esattamente com'è sulla console (System.out.println(...)).

Componente 3: Il Controller Python (app_controller.py)

 Dovrai usare la libreria tkinter per la GUI e il modulo subprocess per eseguire i programmi Java.

Interfaccia Grafica (Tkinter):

L'interfaccia deve contenere:

    Tre campi di input (tk.Entry) per "Nome", "Cognome" ed "Età".

    Un bottone "Salva Utente".

    Un bottone "Mostra Utenti".

    Un'area di testo (tk.Text) per mostrare i messaggi di stato e l'elenco degli utenti.

Logica dei Bottoni:

Bottone "Salva Utente":

    Recupera i testi dai tre campi Entry.

    Usa subprocess.run() per eseguire il programma Java compilato.

Bottone "Mostra Utenti":

    Pulisci l'area di testo.

    Formatta i dati ottenuti in modo leggibile (es. Nome: Mario, Cognome: Rossi, Età: 30) e inseriscili nell'area di testo.
'''


import os
import sys
import subprocess
import tkinter as tk

    
class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("sigma")
        self.root.geometry("300x310")
        self_frame = tk.Frame(self.root, padx=10, pady=10)
        self_frame.pack()
        self.name_label = tk.Label(self_frame, text="Name")
        self.name_label.pack(pady=5)
        self.name_entry = tk.Entry(self_frame, width=30)
        self.name_entry.pack(pady=5)
        self.sname_label = tk.Label(self_frame, text="Last Name")
        self.sname_label.pack(pady=5)
        self.sname_entry = tk.Entry(self_frame, width=30)
        self.sname_entry.pack(pady=5)
        self.age_label = tk.Label(self_frame, text="Age")
        self.age_label.pack(pady=5)
        self.age_entry = tk.Entry(self_frame, width=30)
        self.age_entry.pack(pady=5)
        self.add_button = tk.Button(self_frame, text="Add", command=self.add)
        self.add_button.pack(pady=10)
        self.show_button = tk.Button(self_frame, text="Show", command=self.show)
        self.show_button.pack(pady=10)
        self.output_text = tk.Label(self_frame, text="")
        self.output_text.pack(pady=5)

    def add(self):
        name = self.name_entry.get()
        sname = self.sname_entry.get()
        age = self.age_entry.get()
        java_w(name, sname, age)
    
    def show(self):
        result = java_r()
        if result:
            formatted_result = ""
            lines = result.strip().split('\n')
            for line in lines:
                parts = line.split(';')
                if len(parts) == 3:
                    formatted_result += f"Name: {parts[0]}, Last Name: {parts[1]}, Age: {parts[2]}\n"
            self.output_text.config(text=formatted_result)
        else:
            self.output_text.config(text='non fuzniona')

def java_r():
    java_path = "./read/src"
    # compile using UTF-8 encoding to handle accented characters
    compile = ["javac", "-encoding", "UTF-8", "-d", "../bin", "App.java"]
    compile_process = subprocess.run(
        compile,
        cwd=java_path,
        capture_output=True,
        text=True
    )
    class_path = "./read/bin"
    if compile_process.returncode != 0:
        print("Compilation failed")
        sys.exit()
    result = ["java", "App"]
    result_process = subprocess.run(
        result,
        cwd=class_path,
        capture_output=True,
        text=True
    )

    if result_process.stdout:
        return result_process.stdout

def java_w(arg1, arg2, arg3):
    java_path = "./write/src"
    # compile using UTF-8 encoding to handle accented characters
    compile = ["javac", "-encoding", "UTF-8", "-d", "../bin", "App.java"]
    compile_process = subprocess.run(
        compile,
        cwd=java_path,
        capture_output=True,
        text=True
    )
    class_path = "./write/bin"
    if compile_process.returncode != 0:
        print("Compilation failed")
        sys.exit()
    if arg1 and arg2 and arg3 :
        result = ["java", "App", arg1, arg2, arg3]
    else:
        result = ["java", "App"]

    result_process = subprocess.run(
        result,
        cwd=class_path,
        capture_output=True,
        text=True
    )
    if result_process.stdout:
        return result_process.stdout


def main():
    root = tk.Tk()
    app = GUI(root)
    root.mainloop()

main()