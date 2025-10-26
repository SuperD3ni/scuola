import tkinter as tk
from tkinter import messagebox

class AtmApp:
    def __init__(self, root):
        self.root = root
        self.operations_window = None
        self.setup_login_window()

    def setup_login_window(self):
        """Crea la finestra di login iniziale."""
        self.root.title("Login Bancomat")
        self.root.geometry("400x300")
        self.root.resizable(False, False)
        self.root.config(bg="#2c3e50")

        login_frame = tk.Frame(self.root, bg="#34495e", relief="groove", borderwidth=2)
        login_frame.pack(expand=True, padx=20, pady=20)
       
        tk.Label(login_frame, text="Accesso Bancomat", font=("Helvetica", 16, "bold"), bg="#34495e", fg="white").pack(pady=(10, 20))

        tk.Label(login_frame, text="Codice Conto:", bg="#34495e", fg="#ecf0f1").pack()
        self.account_entry = tk.Entry(login_frame, font=("Helvetica", 12), justify="center", bg="#ecf0f1", relief="flat")
        self.account_entry.pack(pady=5)

        tk.Label(login_frame, text="Password:", bg="#34495e", fg="#ecf0f1").pack()
        self.password_entry = tk.Entry(login_frame, font=("Helvetica", 12), justify="center", bg="#ecf0f1", relief="flat", show="*")
        self.password_entry.pack(pady=5)

        login_button = tk.Button(login_frame, text="Entra", command=self.handle_login, bg="#2980b9", fg="white", font=("Helvetica", 10, "bold"))
        login_button.pack(pady=20, ipady=5, ipadx=10)

    def handle_login(self):
        """Controlla le credenziali e apre la finestra operazioni se corrette."""
        account = self.account_entry.get()
        password = self.password_entry.get()

        if account == "1200" and password == "abc123":
            self.root.withdraw() # Nasconde la finestra di login
            self.create_operations_window()
        else:
            messagebox.showerror("Errore di Login", "Codice conto o password errati.")
            self.password_entry.delete(0, tk.END)

    def create_operations_window(self):
        """Crea la finestra principale del bancomat dopo il login."""
        self.operations_window = tk.Toplevel(self.root)
        self.operations_window.title("Bancomat")
        self.operations_window.geometry("400x500")
        self.operations_window.resizable(False, False)
        self.operations_window.config(bg="#2c3e50")

        # --- Frame principali ---
        top_frame = tk.Frame(self.operations_window, borderwidth=2, relief="groove", bg="#34495e")
        top_frame.pack(side="top", fill="x", padx=10, pady=10)

        middle_frame = tk.Frame(self.operations_window, borderwidth=2, relief="groove", bg="#34495e")
        middle_frame.pack(fill="x", padx=10, pady=(0, 10))

        bottom_frame = tk.Frame(self.operations_window, borderwidth=2, relief="groove", bg="#34495e")
        bottom_frame.pack(fill="both", expand=True, padx=10, pady=(0, 10))

        # --- Widget nel TOP FRAME ---
        tk.Label(top_frame, text="BANCOMAT DIGITALE", font=("Helvetica", 16, "bold"), bg="#34495e", fg="white").pack(pady=(10, 5))
        tk.Label(top_frame, text="Inserisci la somma:", bg="#34495e", fg="#ecf0f1").pack(pady=5)
        self.amount_entry = tk.Entry(top_frame, font=("Helvetica", 14), width=15, justify="center", bg="#ecf0f1", relief="flat")
        self.amount_entry.pack(pady=(0, 10))

        # --- Widget nel MIDDLE FRAME ---
        button_style = {"font": ("Helvetica", 10, "bold"), "fg": "white", "relief": "raised", "borderwidth": 2}
        versa_button = tk.Button(middle_frame, text="Versa", bg="#27ae60", activebackground="#2ecc71", **button_style)
        preleva_button = tk.Button(middle_frame, text="Preleva", bg="#c0392b", activebackground="#e74c3c", **button_style)
        versa_button.grid(row=0, column=0, padx=10, pady=10, sticky="ew", ipady=5)
        preleva_button.grid(row=0, column=1, padx=10, pady=10, sticky="ew", ipady=5)
        middle_frame.columnconfigure(0, weight=1)
        middle_frame.columnconfigure(1, weight=1)

        # --- Widget nel BOTTOM FRAME ---
        self.movimenti_textarea = tk.Text(bottom_frame, height=10, bg="#ecf0f1", relief="sunken", borderwidth=1)
       
        def toggle_movimenti():
            if self.movimenti_textarea.winfo_ismapped():
                self.movimenti_textarea.pack_forget()
                movimenti_button.config(text="Mostra Movimenti")
            else:
                self.movimenti_textarea.pack(fill="both", expand=True, padx=10, pady=(0, 10))
                movimenti_button.config(text="Nascondi Movimenti")
                self.movimenti_textarea.delete("1.0", tk.END)
                self.movimenti_textarea.insert("1.0", "20/10/2025 - Saldo iniziale: 1500.00 €\n")
                self.movimenti_textarea.insert(tk.END, "21/10/2025 - Prelievo: -50.00 €\n")

        movimenti_button = tk.Button(bottom_frame, text="Mostra Movimenti", command=toggle_movimenti, bg="#2980b9", activebackground="#3498db", **button_style)
        movimenti_button.pack(pady=10, fill="x", padx=10, ipady=5)

        # Gestione chiusura finestra operazioni
        self.operations_window.protocol("WM_DELETE_WINDOW", self.logout)

    def logout(self):
        """Chiude la finestra operazioni e mostra di nuovo quella di login."""
        if self.operations_window:
            self.operations_window.destroy()
            self.operations_window = None
       
        # Pulisce i campi per il prossimo login
        self.account_entry.delete(0, tk.END)
        self.password_entry.delete(0, tk.END)

        self.root.deiconify() # Fa riapparire la finestra di login


root = tk.Tk()
app = AtmApp(root)
root.mainloop()