import os
import sys
import subprocess
import tkinter as tk
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class GUI:
    def __init__(self, root):
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

    def open(self, index):
        out = java(str(index))
        self.output_text.config(text=out)

def java(index):
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
    
    result = ["java", "Main", index]

    result_process = subprocess.run(
        result,
        cwd=class_path,
        capture_output=True,
        text=True
    )
    if result_process.stdout:
        return result_process.stdout

def main():
    root = tk.Tk()
    app = GUI(root)
    root.mainloop()

main()