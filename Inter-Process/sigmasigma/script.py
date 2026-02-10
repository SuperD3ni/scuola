import os
import sys
import subprocess
import tkinter as tk
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Lista Concatenata - Animazione")
        self.root.geometry("600x300")
        self.frame = tk.Frame(self.root, padx=10, pady=10)
        self.frame.pack(fill=tk.BOTH, expand=True)
        
        # Casella di testo per l'input
        input_frame = tk.Frame(self.frame)
        input_frame.pack(pady=5)
        tk.Label(input_frame, text="Nome nodo:").pack(side=tk.LEFT, padx=5)
        self.input = tk.Entry(input_frame, width=30)
        self.input.pack(side=tk.LEFT, padx=5)
        
        # Frame per i bottoni
        button_frame = tk.Frame(self.frame)
        button_frame.pack(pady=10)
        
        self.aggiungi = tk.Button(button_frame, text="Aggiungi", command=self.cm_aggiungi, width=15)
        self.aggiungi.pack(side=tk.LEFT, padx=5)
        
        self.rimuovi = tk.Button(button_frame, text="Rimuovi", command=self.cm_rimuovi, width=15)
        self.rimuovi.pack(side=tk.LEFT, padx=5)
        
        # Frame per i nodi
        self.nodi_frame = tk.Frame(self.frame, bg='white', border=2)
        self.nodi_frame.pack(fill=tk.BOTH, expand=True, pady=5, padx=5)
        
        # Variabili di stato
        self.nodi = []  # Lista di nomi dei nodi
        self.animazione_attiva = False
        self.step_counter = 0
        self.inner_frame = None  # Frame interno per i nodi
        
        self.cm_aggiorna_nodi()

    def cm_aggiungi(self):
        nome = self.input.get()
        if nome:
            risposta = java("aggiungi", nome)
            if risposta:
                self.gestisci_risposta(risposta.strip())
                self.input.delete(0, tk.END)
        else:
            pass
    
    def cm_rimuovi(self):
        nome = self.input.get()
        if nome:
            risposta = java("rimuovi", nome)
            if risposta:
                self.gestisci_risposta(risposta.strip())
                self.input.delete(0, tk.END)
    
    def gestisci_risposta(self, risposta):
        """Gestisce il protocollo di comunicazione con Java"""
        linee = risposta.split('\n')
        self.nodi = []
        continua_trovato = False
        
        for linea in linee:
            linea = linea.strip()
            if linea == "finito":
                self.animazione_attiva = False
            elif linea == "continua":
                continua_trovato = True
                self.animazione_attiva = True
                self.step_counter = 0
            elif linea and linea != "null":
                self.nodi.append(linea)
        
        if continua_trovato:
            self.step_animazione()
        elif not self.animazione_attiva:
            self.disegna_nodi()
    
    def step_animazione(self):
        """Esegue uno step dell'animazione"""
        if not self.animazione_attiva:
            return
        
        # Chiama Java con "sposta"
        risposta = java("sposta")
        if risposta:
            linee = risposta.split('\n')
            nodi_tmp = []
            
            for linea in linee:
                linea = linea.strip()
                if linea == "finito":
                    # Fine dell'animazione
                    self.animazione_attiva = False
                elif linea == "continua":
                    # Continua l'animazione
                    self.animazione_attiva = True
                elif linea and linea != "null":
                    nodi_tmp.append(linea)
            
            self.nodi = nodi_tmp
            self.disegna_nodi()
            
            # Se l'animazione è ancora attiva, mette il prossimo step tra 500ms
            if self.animazione_attiva:
                self.step_counter += 1
                self.root.after(500, self.step_animazione)
    
    def disegna_nodi(self):
        # Distruggi il frame interno precedente
        if self.inner_frame is not None:
            self.inner_frame.destroy()

        
        if not self.nodi:
            tk.Label(self.nodi_frame, text="Nessun nodo", bg='white', fg='gray').pack(pady=20)
            return
        
        # Crea un frame interiore per i nodi
        self.inner_frame = tk.Frame(self.nodi_frame, bg='white')
        self.inner_frame.pack(pady=10)
        
        # Disegna i nodi come label
        for nome in self.nodi:
            label = tk.Label(self.inner_frame, text=nome, bg='lightblue', fg='black', padx=15, pady=10, font=('Arial', 10, 'bold'), border=2)
            label.pack(side=tk.LEFT, padx=5)
    
    def cm_aggiorna_nodi(self):
        """Ricarica l'elenco dei nodi dal backend"""
        risposta = java("lista")
        if risposta:
            linee = risposta.strip().split('\n')
            self.nodi = []
            for linea in linee:
                if linea.strip() and linea.strip() != "null":
                    self.nodi.append(linea.strip())
            self.disegna_nodi()




def java(comando, item=None):
    java_path = "./backEndJava/src"
    # Compila i file Java
    compile = ["javac", "-encoding", "UTF-8", "-d", "../bin", "*.java"]
    compile_process = subprocess.run(
        compile,
        cwd=java_path,
        capture_output=True,
        text=True
    )
    if compile_process.returncode != 0:
        print("Compilation failed")
        print(compile_process.stderr)
        return ""
    
    # Esegue il programma Java
    class_path = "./backEndJava/bin"
    if item:
        result = ["java", "-cp", class_path, "App", comando, item]
    else:
        result = ["java", "-cp", class_path, "App", comando]

    result_process = subprocess.run(
        result,
        capture_output=True,
        text=True
    )
    if result_process.returncode == 0 and result_process.stdout:
        return result_process.stdout
    return ""

def main():
    root = tk.Tk()
    app = GUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()