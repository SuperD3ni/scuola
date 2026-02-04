import os
import sys
import subprocess
import tkinter as tk
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Coda GUI")
        self.root.geometry("600x400")
        self.frame = tk.Frame(self.root, padx=10, pady=10)
        self.frame.pack()
        self.input = tk.Entry(self.frame, width=30)
        self.input.pack(pady=5)
        self.aggiungi = tk.Button(self.frame, text="Aggiungi", command=self.cm_aggiungi)
        self.aggiungi.pack(pady=10)
        self.nodi = tk.Frame(self.frame)
        self.nodi.pack()
        self.estrai = tk.Button(self.frame, text="Estrai", command=self.cm_estrai)
        self.estrai.pack(pady=10)
        self.successivo = tk.Button(self.frame, text="Successivo ->", command=self.cm_successivo)
        self.successivo.pack(pady=10)
        self.log_text = tk.Text(self.frame, height=10, width=50)
        self.log_text.pack(pady=5)
        self.buttons = []
        self.index = 0
        self.cm_ripristina()

    def add_button(self):
        btn = tk.Button(self.nodi, text="NODO", bg='lightblue', width=10)
        btn.pack(padx=5)
        self.buttons.append(btn)

    def cm_aggiungi(self):
        nome = self.input.get()
        if nome:
            risposta = java("inserisci", nome)
            if risposta and risposta.strip().startswith("OK"):
                self.add_button()
                self.log_text.insert(tk.END, "Aggiunto " + nome + '\n')
                self.input.delete(0, tk.END)
            else:
                self.log_text.insert(tk.END, "Errore nell'aggiunta\n")
        else:
            self.log_text.insert(tk.END, "Inserisci un nome\n")
        
    def cm_estrai(self):
        risposta = java("estrai")
        if risposta:
            resp = risposta.strip()
            if resp != "VUOTO":
                self.log_text.insert(tk.END, "Estratto " + resp + '\n')
                if self.buttons:
                    self.buttons[0].destroy()
                    self.buttons.pop(0)
                    if self.index > 0:
                        self.index -= 1
            else:
                self.log_text.insert(tk.END, "Coda vuota\n")
        else:
            self.log_text.insert(tk.END, "Errore nell'estrazione\n")
    
    def cm_successivo(self):
        risposta = java("leggi", str(self.index))
        if risposta:
            resp = risposta.strip()
            if resp != "FINE" and self.index < len(self.buttons):
                self.buttons[self.index].config(text=resp, bg='yellow')
                for i in range(len(self.buttons)):
                    if i != self.index:
                        self.buttons[i].config(text="NODO", bg='lightblue')
                self.index += 1
            else:
                self.log_text.insert(tk.END, "Fine della coda\n")
        else:
            self.log_text.insert(tk.END, "Errore nella lettura\n")
    
    def cm_ripristina(self):
        risposta = java("ripristina")
        if risposta:
            lines = risposta.strip().split('\n')
            for line in lines:
                if line.strip() and line.strip() != "null":
                    self.add_button()
            self.log_text.insert(tk.END, "Ripristinato\n")
        else:
            self.log_text.insert(tk.END, "Errore nel ripristino\n")



def java(comando, item=None):
    java_path = "./backend/src"
    # compile using UTF-8 encoding to handle accented characters
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
        sys.exit()
    class_path = "./backend/bin"
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


def main():
    root = tk.Tk()
    app = GUI(root)
    root.mainloop()

main()