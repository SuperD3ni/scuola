import tkinter as tk

from Nastro import Nastro
from Pacco import Pacco


class AppNastro:
	CANVAS_LARGHEZZA = 980
	CANVAS_ALTEZZA = 220
	PERCORSO_RETTANGOLARE = (90, 42, 890, 178)
	LUNGHEZZA_PERCORSO = 2 * (
		(PERCORSO_RETTANGOLARE[2] - PERCORSO_RETTANGOLARE[0])
		+ (PERCORSO_RETTANGOLARE[3] - PERCORSO_RETTANGOLARE[1])
	)

	COLORI_PACCHI = [
		"#5B8E7D",
		"#F2C14E",
		"#D95D39",
		"#4F6D7A",
		"#9C89B8",
		"#7A9E9F",
		"#E07A5F",
	]

	def __init__(self, root):
		# Inizializza stato applicazione e due finestre (controlli + canvas).
		self.root = root
		self.root.title("Controlli Nastro Trasportatore")
		self.root.geometry("520x620")
		self.root.configure(bg="#f4f1de")

		self.canvas_window = tk.Toplevel(self.root)
		self.canvas_window.title("Canvas Nastro Trasportatore")
		self.canvas_window.geometry("1020x360")
		self.canvas_window.configure(bg="#f4f1de")

		# Se una finestra viene chiusa, termina tutta l'app.
		self.root.protocol("WM_DELETE_WINDOW", self._chiudi_app)
		self.canvas_window.protocol("WM_DELETE_WINDOW", self._chiudi_app)

		self.nastro = Nastro()
		self.pacco_in_controllo = None
		self.finestra_controllo = None
		self.label_controllo = None
		self.entry_indice = None
		self._indice_colore = 0
		self._anim_fase = 0.0
		self._velocita_anim = 3.0

		self._build_ui()
		self._aggiorna_canvas()
		self._anima_nastro()

	def _chiudi_app(self):
		# Chiude in modo pulito entrambe le finestre.
		if self.finestra_controllo is not None:
			self.finestra_controllo.destroy()
		try:
			self.canvas_window.destroy()
		except tk.TclError:
			pass
		self.root.destroy()

	def _apri_finestra_controllo(self):
		# Apre la finestra dedicata al controllo del pacco.
		if self.finestra_controllo is not None:
			try:
				self.finestra_controllo.destroy()
			except tk.TclError:
				pass

		self.finestra_controllo = tk.Toplevel(self.root)
		self.finestra_controllo.title("Controllo Pacco")
		self.finestra_controllo.geometry("420x260")
		self.finestra_controllo.configure(bg="#f4f1de")
		self.finestra_controllo.protocol("WM_DELETE_WINDOW", self._chiudi_finestra_controllo)

		titolo_controllo = tk.Label(self.finestra_controllo)
		titolo_controllo.configure(
			text="Controllo Pacco",
			font=("Helvetica", 16),
			bg="#f4f1de",
			fg="#2f3e46",
		)
		titolo_controllo.pack(pady=12)

		self.label_controllo = tk.Label(self.finestra_controllo)
		self.label_controllo.configure(
			text="Pacco in controllo: nessuno",
			bg="#f4f1de",
			fg="#3d405b",
			font=("Helvetica", 10),
		)
		self.label_controllo.pack(pady=10)

		label_indice = tk.Label(self.finestra_controllo)
		label_indice.configure(text="Indice per reinserimento", bg="#f4f1de")
		label_indice.pack()

		self.entry_indice = tk.Entry(self.finestra_controllo)
		self.entry_indice.config(width=20)
		self.entry_indice.pack(pady=4)

		button_reinserisci = tk.Button(self.finestra_controllo)
		button_reinserisci.config(
			text="Reinserisci controllato",
			command=self.reinserisci_controllato,
			bg="#3d405b",
			fg="white",
			width=25,
		)
		button_reinserisci.pack(pady=8)

		self._aggiorna_label_controllo()

	def _chiudi_finestra_controllo(self):
		# Chiude la finestra di controllo se presente.
		if self.finestra_controllo is None:
			return
		self.finestra_controllo.destroy()

		self.finestra_controllo = None
		self.label_controllo = None
		self.entry_indice = None

	def _build_ui(self):
		# Costruisce i controlli nella finestra principale e il canvas in una finestra separata.
		titolo = tk.Label(self.root)
		titolo.configure(
			text="Controlli Nastro Trasportatore",
			font=("Helvetica", 18),
			bg="#f4f1de",
			fg="#2f3e46",
		)
		titolo.pack(pady=10)

		label_nome = tk.Label(self.root)
		label_nome.configure(text="Nome destinatario", bg="#f4f1de")
		label_nome.pack()

		self.entry_nome = tk.Entry(self.root)
		self.entry_nome.config(width=40)
		self.entry_nome.pack(pady=4)

		label_indirizzo = tk.Label(self.root)
		label_indirizzo.configure(text="Indirizzo destinatario", bg="#f4f1de")
		label_indirizzo.pack()

		self.entry_indirizzo = tk.Entry(self.root)
		self.entry_indirizzo.config(width=55)
		self.entry_indirizzo.pack(pady=4)

		label_id = tk.Label(self.root)
		label_id.configure(text="ID spedizione per controllo", bg="#f4f1de")
		label_id.pack()

		self.entry_id = tk.Entry(self.root)
		self.entry_id.config(width=20)
		self.entry_id.pack(pady=4)

		button_coda = tk.Button(self.root)
		button_coda.config(text="Aggiungi in coda", command=self.aggiungi_coda, bg="#81b29a", width=25)
		button_coda.pack(pady=2)

		button_testa = tk.Button(self.root)
		button_testa.config(text="Aggiungi in testa", command=self.aggiungi_testa, bg="#f2cc8f", width=25)
		button_testa.pack(pady=2)

		button_rimuovi = tk.Button(self.root)
		button_rimuovi.config(
			text="Rimuovi per controllo",
			command=self.rimuovi_per_controllo,
			bg="#e07a5f",
			fg="white",
			width=25,
		)
		button_rimuovi.pack(pady=2)

		button_spedisci = tk.Button(self.root)
		button_spedisci.config(
			text="Spedisci testa",
			command=self.spedisci_testa,
			bg="#118ab2",
			fg="white",
			width=25,
		)
		button_spedisci.pack(pady=2)

		titolo_canvas = tk.Label(self.canvas_window)
		titolo_canvas.configure(
			text="Nastro Trasportatore",
			font=("Helvetica", 18),
			bg="#f4f1de",
			fg="#2f3e46",
		)
		titolo_canvas.pack(pady=10)

		self.canvas = tk.Canvas(self.canvas_window)
		self.canvas.config(
			width=self.CANVAS_LARGHEZZA,
			height=self.CANVAS_ALTEZZA,
			bg="white",
			highlightthickness=1,
			highlightbackground="#8d99ae",
		)
		self.canvas.pack(pady=6)

		self.output = tk.Text(self.canvas_window)
		self.output.config(height=6, width=120)
		self.output.pack(pady=8)
		self.output.insert(tk.END, "inserisci i dati e scegli un'operazione.\n")
		self.output.configure(state="disabled")

	def _colore_successivo(self):
		# Restituisce il prossimo colore ciclico per i nuovi pacchi.
		colore = self.COLORI_PACCHI[self._indice_colore % len(self.COLORI_PACCHI)]
		self._indice_colore += 1
		return colore

	def _nuovo_pacco_da_input(self):
		# Legge input utente e crea un pacco valido.
		nome = self.entry_nome.get().strip()
		indirizzo = self.entry_indirizzo.get().strip()

		if not nome:
			self._scrivi_output("Errore: inserisci almeno il nome del destinatario.")
			return None
		if not indirizzo:
			indirizzo = "Indirizzo non specificato"

		return Pacco(nome, indirizzo, self._colore_successivo())

	def _scrivi_output(self, testo):
		# Scrive una riga nel pannello log in basso.
		self.output.configure(state="normal")
		self.output.insert(tk.END, testo + "\n")
		self.output.see(tk.END)
		self.output.configure(state="disabled")

	def _punto_su_percorso(self, distanza):
		# Converte una distanza sul perimetro in coordinate canvas.
		x1, y1, x2, y2 = self.PERCORSO_RETTANGOLARE
		tratto_top = x2 - x1
		tratto_right = y2 - y1
		tratto_bottom = x2 - x1
		tratto_left = y2 - y1
		lunghezza = self.LUNGHEZZA_PERCORSO

		# Riporta la distanza dentro un singolo giro completo del percorso.
		d = distanza % lunghezza
		# Se sta nel primo tratto, il pacco e sul lato alto (orizzontale).
		if d < tratto_top:
			return x1 + d, y1, True
		d -= tratto_top

		# Se sta nel secondo tratto, il pacco e sul lato destro (verticale).
		if d < tratto_right:
			return x2, y1 + d, False
		d -= tratto_right

		# Se sta nel terzo tratto, il pacco e sul lato basso (orizzontale).
		if d < tratto_bottom:
			return x2 - d, y2, True
		d -= tratto_bottom

		# Se resta distanza, il pacco e sull'ultimo tratto: lato sinistro (verticale).
		return x1, y2 - d, False

	def _disegna_sfondo_nastro(self):
		# Disegna base grafica del nastro (anello esterno e interno).
		larghezza_canvas = self.CANVAS_LARGHEZZA
		altezza_canvas = self.CANVAS_ALTEZZA
		x1, y1, x2, y2 = self.PERCORSO_RETTANGOLARE

		self.canvas.create_rectangle(0, 0, larghezza_canvas, altezza_canvas, fill="#f3f3f3", outline="")
		self.canvas.create_rectangle(x1 - 20, y1 - 16, x2 + 20, y2 + 16, fill="#4a4a4a", outline="#4a4a4a")
		self.canvas.create_rectangle(x1 + 20, y1 + 16, x2 - 20, y2 - 16, fill="#f3f3f3", outline="#f3f3f3")

	def _anima_nastro(self):
		# Aggiorna fase animazione e pianifica il frame successivo.
		self._anim_fase = (self._anim_fase + self._velocita_anim) % self.LUNGHEZZA_PERCORSO # distanza dall'inizio del primo pacco, che diventa 0 quando il primo pacco torna al punto di partenza.
		self._aggiorna_canvas()
		self.root.after(60, self._anima_nastro)

	def _aggiorna_label_controllo(self):
		# Mostra quale pacco e attualmente in controllo.
		if self.label_controllo is None:
			return
		if self.pacco_in_controllo is None:
			self.label_controllo.config(text="Pacco in controllo: nessuno")
			return
		self.label_controllo.config(
			text=(
				"Pacco in controllo: "
				f"ID {self.pacco_in_controllo.get_id_spedizione()} - "
				f"{self.pacco_in_controllo.get_destinatario_nome()}"
			)
		)

	def _aggiorna_canvas(self):
		# Ridisegna sfondo e pacchi in base allo stato corrente.
		self.canvas.delete("all")
		self._disegna_sfondo_nastro()

		pacchi = self.nastro.lista_pacchi()

		if not pacchi:
			self.canvas.create_text(490, 110, text="Nastro vuoto", font=("Helvetica", 15), fill="#f8f9fa")
			self._aggiorna_label_controllo()
			return

		distanza_tra_pacchi = 180
		lunghezza = pacchi.get_length()
		for i in range(lunghezza):
			pacco = pacchi.get_at(lunghezza - 1 - i) # al contrario perche se no testa e coda sono al contrario
			x_centro, y_centro, _ = self._punto_su_percorso(self._anim_fase + i * distanza_tra_pacchi) # trova il punto del pacco durante l'animazione
			larghezza = 96
			altezza = 54

			x = x_centro - larghezza / 2
			y = y_centro - altezza / 2

			self.canvas.create_rectangle(x, y, x + larghezza, y + altezza, fill=pacco.get_colore(), outline="#1f2933", width=2)
			self.canvas.create_text(
				x_centro,
				y + 14,
				text=f"ID {pacco.get_id_spedizione()}",
				font=("Helvetica", 9),
				fill="#111111",
			)
			self.canvas.create_text(
				x_centro,
				y + altezza / 2,
				text=pacco.get_destinatario_nome()[:12],
				font=("Helvetica", 9),
				fill="#111111",
			)
			self.canvas.create_text(
				x_centro,
				y + altezza - 12,
				text=pacco.get_destinatario_indirizzo()[:12],
				font=("Helvetica", 8),
				fill="#222222",
			)

		self._aggiorna_label_controllo()

	def aggiungi_coda(self):
		# Aggiunge un nuovo pacco in fondo al nastro.
		pacco = self._nuovo_pacco_da_input()
		if pacco is None:
			return

		self.nastro.aggiungi_in_coda(pacco)
		self._scrivi_output(f"Aggiunto in coda: {pacco.descrizione_breve()}")
		self._aggiorna_canvas()

	def aggiungi_testa(self):
		# Aggiunge un nuovo pacco in testa al nastro.
		pacco = self._nuovo_pacco_da_input()
		if pacco is None:
			return

		self.nastro.aggiungi_in_testa(pacco)
		self._scrivi_output(f"Aggiunto in testa: {pacco.descrizione_breve()}")
		self._aggiorna_canvas()

	def rimuovi_per_controllo(self):
		# Rimuove dal nastro un pacco cercandolo per ID.
		valore_id = self.entry_id.get().strip()
		if not valore_id.isdigit():
			self._scrivi_output("Errore: inserisci un ID numerico valido.")
			return

		id_spedizione = int(valore_id)
		pacco = self.nastro.rimuovi_per_id(id_spedizione)
		if pacco is None:
			self._scrivi_output(f"nessun pacco trovato con ID {id_spedizione}.")
			return

		self.pacco_in_controllo = pacco
		self._apri_finestra_controllo()
		self._scrivi_output(f"Rimosso per controllo: {pacco.descrizione_breve()}")
		self._aggiorna_canvas()

	def reinserisci_controllato(self):
		# Reinserisce il pacco in controllo nella posizione scelta.
		if self.pacco_in_controllo is None:
			self._scrivi_output("non c'e nessun pacco in controllo da reinserire.")
			return

		valore_indice = ""
		if self.entry_indice is not None:
			valore_indice = self.entry_indice.get().strip()
		if valore_indice == "":
			indice = self.nastro.lista_pacchi().get_length()
		else:
			try:
				indice = int(valore_indice)
			except ValueError:
				self._scrivi_output("Errore: l'indice deve essere un numero intero.")
				return

		self.nastro.reinserisci_in_indice(self.pacco_in_controllo, indice)
		self._scrivi_output(
			f"Reinserito pacco ID {self.pacco_in_controllo.get_id_spedizione()} all'indice {indice}."
		)
		self.pacco_in_controllo = None
		self._chiudi_finestra_controllo()
		self._aggiorna_canvas()

	def spedisci_testa(self):
		# Spedisce il pacco in testa e aggiorna interfaccia.
		pacco = self.nastro.spedisci_testa()
		if pacco is None:
			self._scrivi_output("il nastro e vuoto.")
			return

		self._scrivi_output("Spedito pacco:\n" + pacco.descrizione_completa())
		self._aggiorna_canvas()
