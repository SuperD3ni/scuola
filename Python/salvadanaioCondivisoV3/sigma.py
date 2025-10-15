import tkinter as tk

class Salvadanaio:
    def __init__(self, soldi=0, root=None, dimensione="300x150+100+100"):
        self.soldi = soldi
        self.finestra = None
        if root:
            self.build_GUI(root, dimensione)

    def build_GUI(self, root, dimensione):
        self.finestra = tk.Toplevel(root)
        self.finestra.title("Salvadanaio Condiviso")
        self.finestra.geometry(dimensione)
        
        # Grid config
        for i in range(3):
            self.finestra.grid_columnconfigure(i, weight=1)
        for i in range(3):
            self.finestra.grid_rowconfigure(i, weight=1)

        self.saldo_var = tk.StringVar(value=f"Saldo attuale: {self.mostra_saldo():.2f} €")
        
        # Saldo attuale
        tk.Label(self.finestra, textvariable=self.saldo_var, font=("Arial", 16)).grid(row=0, column=0, columnspan=3, pady=10, sticky="nsew")
        
        # Svuota Salvadanaio button
        tk.Button(self.finestra, text="SVUOTA SALVADANAIO", command=self.svuota_e_aggiorna, font=("Arial", 12), bg="#dc3545").grid(row=1, column=1, padx=10, pady=30, sticky="nsew")
        
        self.aggiorna_saldo()

    def aggiungi(self, somma):
        if somma >= 0:
            self.soldi += somma

    def mostra_saldo(self):
        return self.soldi

    def svuota(self):
        self.soldi = 0

    def aggiorna_saldo(self):
        if self.finestra and self.saldo_var:
            saldo = self.mostra_saldo()
            self.saldo_var.set(f"Saldo attuale: {saldo:.2f} €")

    def svuota_e_aggiorna(self):
        self.svuota()
        self.aggiorna_saldo()

class Fratello:
    def __init__(self, nome, cognome, salvadanaio, root=None, dimensione="300x150+450+100"):
        self.nome = nome
        self.cognome = cognome
        self.salvadanaio = salvadanaio
        self.finestra = None
        if root:
            self.build_GUI(root, dimensione)

    def build_GUI(self, root, dimensione):
        self.finestra = tk.Toplevel(root)
        self.finestra.title(f"Operazioni di {self.nome}")
        self.finestra.geometry(dimensione)
        
        # Grid config
        for i in range(4):
            self.finestra.grid_columnconfigure(i, weight=1)
        for i in range(3):
            self.finestra.grid_rowconfigure(i, weight=1)

        tk.Label(self.finestra, text=f"Deposito di {self.nome} {self.cognome}", font=("Arial", 12)).grid(row=0, column=0, columnspan=4, pady=(10, 5), sticky="s")
        
        self.input_somma = tk.Entry(self.finestra, font=("Arial", 12))
        
        tk.Label(self.finestra, text="Somma (€):", font=("Arial", 10)).grid(row=1, column=1, padx=5, pady=5, sticky="e")
        self.input_somma.grid(row=1, column=2, padx=5, pady=5, sticky="ew")
        
        tk.Button(self.finestra, text=f"Aggiungi ({self.nome})", command=self.metti_soldi_handler, font=("Arial", 10), bg="#b1d7ff").grid(row=2, column=1, columnspan=2, padx=5, pady=10, sticky="ew")

    def metti_soldi(self, somma):
        self.salvadanaio.aggiungi(somma)
        
    def controlla_risparmi(self):
        return self.salvadanaio.mostra_saldo()

    def metti_soldi_handler(self):
        try:
            somma = float(self.input_somma.get())
            if somma < 0:
                raise ValueError("La somma deve essere positiva")
            self.metti_soldi(somma)
            self.input_somma.delete(0, tk.END)
            self.salvadanaio.aggiorna_saldo()
        except ValueError:
            self.input_somma.delete(0, tk.END)
            self.input_somma.insert(0, "Errore")
        except Exception as e:
            print(f"Errore: {e}")

def build_GUI():
    root = tk.Tk()
    root.geometry("200x50+750+100")
    
    # Inizializza Salvadanaio e Fratelli, creando le Toplevel windows
    salvadanaio1 = Salvadanaio(100, root, dimensione="300x200+100+100")
    
    # Passa lo stesso oggetto salvadanaio ai fratelli
    fratello1 = Fratello("Mario", "Rossi", salvadanaio1, root, dimensione="350x200+450+100")
    fratello2 = Fratello("Luigi", "Verdi", salvadanaio1, root, dimensione="350x200+450+350")
    
    root.mainloop()

build_GUI()