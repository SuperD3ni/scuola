import tkinter as tk

class Salvadanaio:
    def __init__(self, soldi=0, ):
        self.soldi = soldi
    def aggiungi(self, somma):
        if somma >= 0:
            self.soldi += somma
    def mostra_saldo(self):
        return self.soldi
    def svuota(self):
        self.soldi = 0

class Fratello:
    def __init__(self, nome, cognome, Salvadanaio):
        self.nome = nome
        self.cognome = cognome
        self.salvadanaio = Salvadanaio
    def metti_soldi(self, somma):
        self.salvadanaio.aggiungi(somma)
    def controlla_risparmi(self):
        return self.salvadanaio.mostra_saldo()

def build_GUI():
    root = tk.Tk()
    root.title("Salvadanaio Condiviso")
    root.geometry("400x500")

    salvadanaio = Salvadanaio(0)
    fratello1 = Fratello("Mario", "Rossi", salvadanaio)
    fratello2 = Fratello("Luigi", "Verdi", salvadanaio)
    
    # Griglie
    for i in range(5):
        root.grid_columnconfigure(i, weight=1)
    for i in range(7):
        root.grid_rowconfigure(i, weight=1)

    saldo_var = tk.StringVar(value=f"Saldo attuale: {salvadanaio.mostra_saldo():.2f} €")
    
    # Inputs
    input_f1 = tk.Entry(root, font=("Arial", 12))
    input_f2 = tk.Entry(root, font=("Arial", 12))

    def aggiorna_saldo():
        saldo = salvadanaio.mostra_saldo()
        saldo_var.set(f"Saldo attuale: {saldo:.2f} €")

    def metti_soldi_f1():
        try:
            somma = int(input_f1.get())
            fratello1.metti_soldi(somma)
            input_f1.delete(0, tk.END)
            aggiorna_saldo()
        except Exception as e:
            input_f1.delete(0, tk.END)
            input_f1.insert(0, "Errore")
            print(f"Errore: {e}")

    def metti_soldi_f2():
        try:
            somma = int(input_f2.get())
            fratello2.metti_soldi(somma)
            input_f2.delete(0, tk.END)
            aggiorna_saldo()
        except Exception as e:
            input_f2.delete(0, tk.END)
            input_f2.insert(0, "Errore")
            print(f"Errore: {e}")

    def svuota_salvadanaio():
        salvadanaio.svuota()
        input_f1.delete(0, tk.END)
        input_f2.delete(0, tk.END)
        aggiorna_saldo()

    # Saldo attuale
    tk.Label(root, textvariable=saldo_var, font=("Arial", 16)).grid(row=1, column=0, columnspan=5, pady=10, sticky="nsew")
    # Inputs 1
    tk.Label(root, text=f"Deposito di {fratello1.nome} {fratello1.cognome}", font=("Arial", 12)).grid(row=2, column=0, columnspan=5, pady=(20, 5), sticky="s")
    tk.Label(root, text="Somma (€):", font=("Arial", 10)).grid(row=3, column=1, padx=5, pady=5, sticky="e")
    input_f1.grid(row=3, column=2, padx=5, pady=5, sticky="ew")
    tk.Button(root, text=f"Aggiungi ({fratello1.nome})", command=metti_soldi_f1, font=("Arial", 10), bg="#b1d7ff").grid(row=3, column=3, padx=5, pady=5, sticky="ew")

    # Inputs 2
    tk.Label(root, text=f"Deposito di {fratello2.nome} {fratello2.cognome}", font=("Arial", 12)).grid(row=4, column=0, columnspan=5, pady=(20, 5), sticky="s")
    tk.Label(root, text="Somma (€):", font=("Arial", 10)).grid(row=5, column=1, padx=5, pady=5, sticky="e")
    input_f2.grid(row=5, column=2, padx=5, pady=5, sticky="ew")
    tk.Button(root, text=f"Aggiungi ({fratello2.nome})", command=metti_soldi_f2, font=("Arial", 10), bg="#b1d7ff").grid(row=5, column=3, padx=5, pady=5, sticky="ew")

    # Svuota Salvadanaio
    tk.Button(root, text="SVUOTA SALVADANAIO", command=svuota_salvadanaio, font=("Arial", 12), bg="#dc3545").grid(row=6, column=1, columnspan=3, padx=10, pady=30, sticky="nsew")

    aggiorna_saldo() 
    root.mainloop()

soldi_iniziali = 0 
salvadanaio = Salvadanaio(soldi_iniziali)
fratello1 = Fratello("Mario", "Rossi", salvadanaio)
fratello2 = Fratello("Luigi", "Verdi", salvadanaio)
build_GUI()