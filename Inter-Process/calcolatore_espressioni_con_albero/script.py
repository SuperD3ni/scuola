import os
import subprocess
import tkinter as tk

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Sigma")
        self.root.geometry("200x250")
        
        self.frame = tk.Frame(self.root, padx=20, pady=20)
        self.frame.pack(fill=tk.BOTH, expand=True)
        self.inner_frame = None
        
        # Input
        input_frame = tk.Frame(self.frame)
        input_frame.pack(pady=10)
        tk.Label(input_frame, text="Espressione:").pack(side=tk.LEFT, padx=5)
        self.input_nome = tk.Entry(input_frame, width=20)
        self.input_nome.pack(side=tk.LEFT, padx=5)
        
        # Bottoni 
        btn_frame = tk.Frame(self.frame)
        btn_frame.pack(pady=10)
        self.btn_calcola = tk.Button(btn_frame, text="calcola", command=self.calcola, bg="#d1fae5")
        self.btn_calcola.pack(side=tk.LEFT, padx=5)
        
        # Area Visualizzazione
        self.risultato_frame = tk.Frame(self.frame, bg='white', border=1, relief=tk.SOLID)
        self.risultato_frame.pack(fill=tk.BOTH, expand=True, pady=20)
        

    def calcola(self):
        espressione = self.input_nome.get()
        risultato = java(espressione)
        self.visualizza_risultato(risultato)
    
    def visualizza_risultato(self, risultato):
        if self.inner_frame:
            self.inner_frame.destroy()
        self.inner_frame = tk.Label(self.risultato_frame, text=risultato, bg='white', font=("Arial", 14))
        self.inner_frame.pack(padx=10, pady=10)

def java(espressione):
    java_path = "./calculatore/src"
    java_files = [file for file in os.listdir(java_path) if file.endswith(".java")]
    if not java_files:
        print("Compilation failed")
        print("error: no .java files found in src")
        return ""

    compile = ["javac", "-encoding", "UTF-8", "-d", "../bin", *java_files]
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
    
    class_path = "./calculatore/bin"
    if espressione:
        result = ["java", "-cp", class_path, "App", espressione]
    else:
        result = ["java", "-cp", class_path, "App"]

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