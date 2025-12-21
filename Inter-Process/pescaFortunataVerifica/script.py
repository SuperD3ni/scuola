import os
import sys
import subprocess
import tkinter as tk
from Carbone import Carbone
from Console import Console
from Smartphone import Smartphone
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class GUI:
    def __init__(self, root):
        self.n = 0                                                      # Opened box counter
        self.list = []                                                  # Object list
        self.root = root
        self.root.title("sigma")
        self.root.geometry("300x310")
        self_frame = tk.Frame(self.root, padx=10, pady=10)
        self_frame.pack()
        self.box_1 = tk.Button(self_frame, text="Scatola", command=lambda: self.open(0))
        self.box_1.pack(pady=10)
        self.box_2 = tk.Button(self_frame, text="Scatola", command=lambda: self.open(1))
        self.box_2.pack(pady=10)
        self.box_3 = tk.Button(self_frame, text="Scatola", command=lambda: self.open(2))
        self.box_3.pack(pady=10)
        self.box_4 = tk.Button(self_frame, text="Scatola", command=lambda: self.open(3))
        self.box_4.pack(pady=10)
        self.box_5 = tk.Button(self_frame, text="Scatola", command=lambda: self.open(4))
        self.box_5.pack(pady=10)
        self.output_text = tk.Label(self_frame, text="")
        self.output_text.pack(pady=5)
        self.show_button = tk.Button(self_frame, text="Visualizza vincita", command=self.show)
        self.show_button.pack(pady=10)

    def open(self, index):                                              # Open box         
        self.n += 1
        obj = java(str(index), str(self.n))
        obj = obj.split(";")
        if obj[0] == "Console":                                         # Check which object returned and create in python
            console = Console(obj[1], obj[2] == "true")
            self.list.append(console)
            self.output_text.config(text=str(console))
        elif obj[0] == "Carbone":
            carbone = Carbone(obj[1], int(obj[2]))
            self.list.append(carbone)
            self.root.withdraw()
            self.show()
        elif obj[0] == "Smartphone":
            smartphone = Smartphone(obj[1], int(obj[2]))
            self.list.append(smartphone)
            self.output_text.config(text=str(smartphone))
        if index == 0:                                                  # Disable button after use based on its index
            self.box_1.config(state="disabled")
        elif index == 1:
            self.box_2.config(state="disabled")
        elif index == 2:
            self.box_3.config(state="disabled")
        elif index == 3:
            self.box_4.config(state="disabled")
        elif index == 4:
            self.box_5.config(state="disabled")
        
    def show(self):
        if self.list != []:
            carboni = 0
            consoles = 0
            smartphones = 0
            toplevel = tk.Toplevel(self.root)
            for item in self.list:
                label = tk.Label(toplevel, text=str(item))
                label.pack()
                if isinstance(item, Carbone):    
                    carboni += 1
                elif isinstance(item, Console):
                    consoles += 1
                elif isinstance(item, Smartphone):
                    smartphones += 1
            summary = tk.Label(toplevel, text=f"Totale oggetti:\nCarbone: {carboni}\nConsole: {consoles}\nSmartphone: {smartphones}")   
            summary.pack()
        else:
            self.output_text.config(text="Nessuna scatola aperta")
        

def java(index, n):                                                     # Execute java
    java_path = "./java/src"
    # compile using UTF-8 encoding to handle accented characters
    compile = ["javac", "-encoding", "UTF-8", "-d", "../bin", "Main.java"]
    compile_process = subprocess.run(
        compile,
        cwd=java_path,
        capture_output=True,
        text=True
    )
    class_path = "./java/bin"
    if compile_process.returncode != 0:
        print("Compilation failed")
        sys.exit()
    
    result = ["java", "Main", index, n]

    result_process = subprocess.run(
        result,
        cwd=class_path,
        capture_output=True,
        text=True
    )
    if result_process.stdout:
        return result_process.stdout

def main():                                                             # main, start GUI
    root = tk.Tk()
    app = GUI(root)
    root.mainloop()

main()