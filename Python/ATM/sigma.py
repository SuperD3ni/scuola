import tkinter as tk
from tkinter import simpledialog
import pickle
import os
import random
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Classi
# formatta la transazione in una stringa leggibile
class Transazione:
    def __init__(self, data_ora = "N/A", tipo_operazione = "N/A", importo = 0, saldo_post_operazione = 0):
        self.data_ora = data_ora
        self.tipo_operazione = tipo_operazione
        self.importo = importo
        self.saldo_post_operazione = saldo_post_operazione
    def __str__(self):
        return f"[{self.data_ora}] {self.tipo_operazione}: {self.importo:.2f} EUR | Saldo: {self.saldo_post_operazione:.2f} EUR"

# il contocorrente che gestisce le varie transazioni e il saldo
class ContoCorrente:
    def __init__(self):
        self.iban = random.randint(10**10, 10**11 - 1)
        self.saldo = 0
        self.lista_movimenti = []
    def deposita(self, importo):
        if importo > 0:
            self.saldo += importo
            transazione = Transazione("N/A", "Versamento", importo, self.saldo)
            self.lista_movimenti.append(transazione)
    def preleva(self, importo):
        if importo <= self.saldo and importo > 0:
            self.saldo -= importo
            transazione = Transazione("N/A", "Prelievo", importo, self.saldo)
            self.lista_movimenti.append(transazione)
        else:
            print("Fondi insufficienti")
    def get_saldo(self):
        return self.saldo
    def get_lista_movimenti(self):
        return self.lista_movimenti

# la carta di una persona, associata a un conto
class BancomatPersonale:
    def __init__(self):
        self.codice_carta = random.randint(10**15, 10**16 - 1)
        self.pin = random.randint(10**4, 10**5 - 1)
        self.conto_associato = ContoCorrente()
    def verifica_pin(self, pin_inserito):
        if pin_inserito == self.pin:
            return True

# persona che possiede la carta
class Persona:
    def __init__(self, nome, cognome):
        self.nome = nome
        self.cognome = cognome
        self.carta = BancomatPersonale()

# la banca che gestisce i clienti
class Banca:
    def __init__(self, nome_banca):
        self.nome_banca = nome_banca
        self.clienti = []
    def aggiungi_cliente(self, persona):
        self.clienti.append(persona)
    def cerca_cliente_da_carta(self, codice_carta):
        for cliente in self.clienti:
            if cliente.carta.codice_carta == codice_carta:
                return cliente
    def salva_dati(self, file):
        with open(file, "wb") as f:
            pickle.dump(self, f)
    def carica_dati(self, file):
        with open(file, "rb") as f:
            o = pickle.load(f)
            self.clienti = o.clienti
            self.nome_banca = o.nome_banca
        
# interfaccia grafica

class SportelloBancomat:
    def __init__(self):
        self.root = tk.Tk()
        self.dimensione="300x150+100+100"
        self.build_login_GUI(self.root, self.dimensione)
        self.root.mainloop()

    def build_login_GUI(self, root, dimensione):
        self.finestra_login = tk.Toplevel(root)
        self.finestra_login.title("Login Bancomat")
        self.finestra_login.geometry(dimensione)
        for i in range(4):
            root.grid_columnconfigure(i, weight=1)
        for i in range(5):
            root.grid_rowconfigure(i, weight=1)
        
        self.codice_carta = tk.Entry(self.finestra_login, font=("Arial", 12))
        self.codice_carta.grid(row=0, column=0, columnspan=4, pady=(10, 5), sticky="s")
        self.pin_carta = tk.Entry(self.finestra_login, font=("Arial", 12))
        self.pin_carta.grid(row=1, column=0, columnspan=4, pady=(5, 10), sticky="s")
        
        tk.Button(self.finestra_login, text="Accedi", command=self.accedi_handler, font=("Arial", 10), bg="#b1d7ff").grid(row=2, column=0, columnspan=4, pady=(10, 5), sticky="s")

        self.messaggi = tk.Label(self.finestra_login, text="Benvenuto!", font=("Arial", 10), fg="red")
        self.messaggi.grid(row=3, column=0, columnspan=4, pady=(5, 10), sticky="s")
    def accedi_handler(self):
        try:
            codice = int(self.codice_carta.get())
            pin = int(self.pin_carta.get())
            self.cliente = banca.cerca_cliente_da_carta(codice)
            if self.cliente and self.cliente.carta.verifica_pin(pin):
                self.finestra_login.destroy()
                self.build_main_GUI(self.root, self.dimensione)
            else:
                self.messaggi.config(text="Codice o PIN non validi")
        except ValueError:
            self.messaggi.config(text="Inserisci numeri")
    
    def build_main_GUI(self, root, dimensione):
        self.finestra_main = tk.Toplevel(root)
        self.finestra_main.title("Sportello Bancomat")
        self.finestra_main.geometry(dimensione)
        for i in range(4):
            root.grid_columnconfigure(i, weight=1)
        for i in range(6):
            root.grid_rowconfigure(i, weight=1)

        tk.Label(self.finestra_main, text=f"Benvenuto {self.cliente.nome} {self.cliente.cognome}", font=("Arial", 12)).grid(row=0, column=0, columnspan=4, pady=(10, 5), sticky="s")

        self.saldo = tk.Label(self.finestra_main, text=f"Saldo corrente: {self.cliente.carta.conto_associato.get_saldo():.2f} EUR", font=("Arial", 10))
        self.saldo.grid(row=1, column=0, columnspan=4, pady=(5, 10), sticky="s")

        tk.Button(self.finestra_main, text="Preleva", command=self.preleva_handler, font=("Arial", 10), bg="#b1d7ff").grid(row=2, column=0, columnspan=2, padx=5, pady=5, sticky="ew")
        tk.Button(self.finestra_main, text="Versa", command=self.versa_handler, font=("Arial", 10), bg="#b1d7ff").grid(row=3, column=0, columnspan=2, padx=5, pady=5, sticky="ew")
        tk.Button(self.finestra_main, text="Lista Movimenti", command=self.movimenti_handler, font=("Arial", 10), bg="#b1d7ff").grid(row=4, column=0, columnspan=4, padx=5, pady=5, sticky="ew")
        tk.Button(self.finestra_main, text="Esci", command=self.esci_handler, font=("Arial", 10), bg="#ffb1b1").grid(row=5, column=0, columnspan=4, padx=5, pady=10, sticky="ew")
        
    def preleva_handler(self):
        input = simpledialog.askinteger("Preleva", "Inserisci l'importo da prelevare: ")
        if input:
            self.cliente.carta.conto_associato.preleva(input)
            self.saldo.config(text=f"Saldo corrente: {self.cliente.carta.conto_associato.get_saldo():.2f} EUR")
    def versa_handler(self):
        input = simpledialog.askinteger("Versa", "Inserisci l'importo da versare: ")
        if input:
            self.cliente.carta.conto_associato.deposita(input)
            self.saldo.config(text=f"Saldo corrente: {self.cliente.carta.conto_associato.get_saldo():.2f} EUR")
    def movimenti_handler(self):
        self.finestra_movimenti = tk.Toplevel(self.root)
        self.finestra_movimenti.title("Lista Movimenti")
        self.finestra_movimenti.geometry("400x300+150+150")
        self.lista_movimenti = self.cliente.carta.conto_associato.get_lista_movimenti()
        for i in range(1):
            self.finestra_movimenti.grid_columnconfigure(i, weight=1)
        for i in range(len(self.lista_movimenti)):
            self.finestra_movimenti.grid_columnconfigure(i, weight=1)
        for i in self.lista_movimenti:
            tk.Label(self.finestra_movimenti, text=i.__str__(), font=("Arial", 10)).grid(row=self.lista_movimenti.index(i), column=0, padx=5, pady=5, sticky="w")
    def esci_handler(self):
        self.finestra_main.destroy()
        self.build_login_GUI(self.root, self.dimensione)

# main
try:
    banca = Banca("BancaSigma")
    if os.path.isfile("banca_dati.pkl"):
        banca.carica_dati("banca_dati.pkl")
        sportello = SportelloBancomat()
        print(banca.clienti[0].carta.codice_carta, banca.clienti[0].carta.pin, banca.clienti[1].carta.codice_carta, banca.clienti[1].carta.pin)
    else:
        banca = banca.salva_dati("banca_dati.pkl")
        sportello = SportelloBancomat()
except Exception as e:
    print(f"Errore nel caricamento dei dati: {e}")