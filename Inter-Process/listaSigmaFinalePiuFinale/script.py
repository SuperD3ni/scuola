import os
import subprocess
import tkinter as tk

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Sigma")
        self.root.geometry("800x400")
        
        self.frame = tk.Frame(self.root, padx=20, pady=20)
        self.frame.pack(fill=tk.BOTH, expand=True)
        self.inner_frame = None
        
        # Input
        input_frame = tk.Frame(self.frame)
        input_frame.pack(pady=10)
        tk.Label(input_frame, text="Nuovo Nodo:").pack(side=tk.LEFT, padx=5)
        self.input_nome = tk.Entry(input_frame, width=20)
        self.input_nome.pack(side=tk.LEFT, padx=5)
        
        # Bottoni 
        btn_frame = tk.Frame(self.frame)
        btn_frame.pack(pady=10)
        self.btn_aggiungi = tk.Button(btn_frame, text="Aggiungi", command=self.avvia_inserimento, bg="#d1fae5")
        self.btn_aggiungi.pack(side=tk.LEFT, padx=5)
        self.btn_rimuovi = tk.Button(btn_frame, text="Rimuovi", command=self.avvia_rimozione, bg="#fee2e2")
        self.btn_rimuovi.pack(side=tk.LEFT, padx=5)
        
        # Area Visualizzazione
        self.nodi_frame = tk.Frame(self.frame, bg='white', border=1, relief=tk.SOLID)
        self.nodi_frame.pack(fill=tk.BOTH, expand=True, pady=20)
        
        # creazione variabili utili
        self.nodi = [] # Lista di nodi presenti
        self.nome_in_movimento = "" #nome in movimento per cambiare colore
        self.target_index = -1 
        self.current_index = -1
        
        self.aggiorna_stato_da_java() #chiamata iniziale per caricare i nodi gia presenti

    def aggiorna_stato_da_java(self): #aggiorna la lista nell'interfaccia
        risposta = java("lista")
        self.nodi = self.parse_risposta(risposta)
        self.disegna_nodi()

    def parse_risposta(self, risposta): #formatta la risposta trasformando in lista i nodi arrivati
        if not risposta: return []
        linee = risposta.strip().split('\n')
        risultato = []
        for linea in linee:
            linea = linea.strip()
            if linea:
                risultato.append(linea)
        return risultato

    def avvia_inserimento(self): # quando clicca inserisci
        nome = self.input_nome.get().strip()
        if not nome: 
            return

        self.target_index = 0
        trovato = False
        i = 0
        while i < len(self.nodi) and not trovato: # trova la posizione finale del nome (target_index)
            if nome.lower() < self.nodi[i].lower():
                self.target_index = i
                trovato = True
            i += 1
        
        if not trovato:
            self.target_index = len(self.nodi)
        
        self.current_index = len(self.nodi)
        self.nome_in_movimento = nome
        
        java("aggiungi", nome, str(self.current_index)) #esegue comando effettico in Java
        self.input_nome.delete(0, tk.END)
        
        self.step_animazione()

    def avvia_rimozione(self): #Quando clicca rimuovi
        nome = self.input_nome.get().strip()
        if not nome:
            return

        if nome not in self.nodi:
            return

        self.nome_in_movimento = ""
        java("rimuovi", nome)
        self.input_nome.delete(0, tk.END)
        self.aggiorna_stato_da_java()

    def step_animazione(self): #va a fare l'animazione, e cambia l'indice corrente o lo resetta se si e raggiunto l'obiettivo
        if self.current_index <= self.target_index:
            self.nome_in_movimento = "" 
            self.aggiorna_stato_da_java()
            return

        # Spostamento verso sinistra: rimuovi e reinserisci una posizione prima
        self.current_index -= 1
        java("sposta", self.nome_in_movimento, str(self.current_index))
        
        self.aggiorna_stato_da_java()
        
        # funzione ricorsiva con ritardo per animazione (ciclo rompe tutto perche python deve esplodere pero le funzioni ricorsive sono belle)
        self.root.after(500, self.step_animazione)

    def disegna_nodi(self): #elimina e ridisegna i nodi
        if self.inner_frame is not None:
            self.inner_frame.destroy()
            
        self.inner_frame = tk.Frame(self.nodi_frame, bg='white')
        self.inner_frame.pack(pady=30)

        for nome in self.nodi:
            is_moving = nome == self.nome_in_movimento
            if is_moving:
                label_bg = "yellow"
            else:
                label_bg = "lightblue"
            lbl = tk.Label(
                self.inner_frame,
                text=nome,
                padx=10,
                pady=8,
                bg=label_bg,
            )
            lbl.pack(side=tk.LEFT, padx=2)
            
            
def java(comando, item=None, index=None):
    java_path = "./backEndJava/src"
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
    
    class_path = "./backEndJava/bin"
    if item and index:
        result = ["java", "-cp", class_path, "App", comando, item, index]
    elif item:
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

main()