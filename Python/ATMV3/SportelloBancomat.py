import tkinter as tk
from tkinter import simpledialog

# interfaccia grafica

class SportelloBancomat:
    def __init__(self, banca_instance): # Aggiunto 'banca_instance' per l'accesso a 'banca'
        self.banca = banca_instance
        self.root = tk.Tk()
        self.root.withdraw()
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
            self.cliente = self.banca.cerca_cliente_da_carta(codice)
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
            self.banca.salva_dati('banca_dati.pkl')
            self.saldo.config(text=f"Saldo corrente: {self.cliente.carta.conto_associato.get_saldo():.2f} EUR")
    def versa_handler(self):
        input = simpledialog.askinteger("Versa", "Inserisci l'importo da versare: ")
        if input:
            self.cliente.carta.conto_associato.deposita(input)
            self.banca.salva_dati('banca_dati.pkl')
            self.saldo.config(text=f"Saldo corrente: {self.cliente.carta.conto_associato.get_saldo():.2f} EUR")
    def movimenti_handler(self):
        self.finestra_movimenti = tk.Toplevel(self.root)
        self.finestra_movimenti.title("Lista Movimenti")
        self.finestra_movimenti.geometry("400x300+150+150")
        self.lista_movimenti = self.cliente.carta.conto_associato.get_lista_movimenti()
        for i in range(1):
            self.finestra_movimenti.grid_columnconfigure(i, weight=1)
        # La riga qui sotto non è corretta per il layout a griglia:
        # for i in range(len(self.lista_movimenti)):
        #     self.finestra_movimenti.grid_columnconfigure(i, weight=1)
        # Manteniamo la logica originale di posizionamento:
        for idx, i in enumerate(self.lista_movimenti):
            tk.Label(self.finestra_movimenti, text=i.__str__(), font=("Arial", 10)).grid(row=idx, column=0, padx=5, pady=5, sticky="w")

    def esci_handler(self):
        self.finestra_main.destroy()
        self.build_login_GUI(self.root, self.dimensione)