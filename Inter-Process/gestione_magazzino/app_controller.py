import os
import sys
import subprocess
import tkinter as tk
os.path.abspath(os.path.dirname(__file__))
 
class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("sigma")
        self.root.geometry("300x310")
        self_frame = tk.Frame(self.root, padx=10, pady=10)
        self_frame.pack()
        self.prod_label = tk.Label(self_frame, text="Codice notto")
        self.prod_label.pack(pady=5)
        self.prod_entry = tk.Entry(self_frame, width=30)
        self.prod_entry.pack(pady=5)
        self.n_label = tk.Label(self_frame, text="Quantità")
        self.n_label.pack(pady=5)
        self.n_entry = tk.Entry(self_frame, width=30)
        self.n_entry.pack(pady=5)
        self.sell_button = tk.Button(self_frame, text="Vendi", command=self.sell)
        self.sell_button.pack(pady=10)
        self.output_text = tk.Label(self_frame, text="")
        self.output_text.pack(pady=5)

    def sell(self):
        prod = self.prod_entry.get()
        n = self.n_entry.get()
        out = java(prod, n)
        if out.startswith("ERRORE"):
            self.output_text.config(text="operazione fallita: " + out)
        else:
            out = out.split(";")
            prodotto = Prodotto(out[0], out[1])
            self.output_text.config(text=f"Prodotto: {out[0]}, {n}, {out[1]}, TOTALE: {prodotto.calcolaTotale(int(n))} €")

def java(prod, n):
    java_path = "./java_processor/src"
    # compile using UTF-8 encoding to handle accented characters
    compile = ["javac", "-encoding", "UTF-8", "-d", "../bin", "App.java"]
    compile_process = subprocess.run(
        compile,
        cwd=java_path,
        capture_output=True,
        text=True
    )
    class_path = "./java_processor/bin"
    if compile_process.returncode != 0:
        print("Compilation failed")
        sys.exit()
    if prod and n:
        result = ["java", "App", prod, n]
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

class Prodotto:
    def __init__(self, desc, price):
        self.desc = desc
        self.price = price
    def calcolaTotale(self, quantitaVenduta):
        return self.price * quantitaVenduta


def main():
    root = tk.Tk()
    app = GUI(root)
    root.mainloop()

main()