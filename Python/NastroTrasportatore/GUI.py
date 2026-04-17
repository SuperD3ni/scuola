import random
import tkinter as tk

from Pacco import Pacco

WIDTH = 900
HEIGHT = 260
DELAY = 16
SPEED = 3
PACCO_W = 80
PACCO_H = 40


class GUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Nastro Trasportatore - Animazione")

        self.nastro_trasportatore = []
        self._job = None
        self.running = False
        self.speed_x = SPEED
        self.next_id = 1
        self.colori = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#a855f7", "#ec4899"]

        self.canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT, bg="white")
        self.canvas.pack(padx=10, pady=10)

        self.belt_x1 = 40
        self.belt_x2 = WIDTH - 40
        self.belt_y1 = HEIGHT // 2 - 35
        self.belt_y2 = HEIGHT // 2 + 35

        self._draw_belt()

        input_frame = tk.Frame(root)
        input_frame.pack(pady=4)

        tk.Label(input_frame, text="Destinatario:").pack(side=tk.LEFT, padx=5)
        self.input_nome = tk.Entry(input_frame, width=24)
        self.input_nome.pack(side=tk.LEFT, padx=5)

        self.btn_add = tk.Button(input_frame, text="Aggiungi pacco", width=14, command=self.aggiungi_pacco)
        self.btn_add.pack(side=tk.LEFT, padx=5)

        frame = tk.Frame(root)
        frame.pack(pady=5)

        self.btn_start = tk.Button(frame, text="Avvia", width=10, command=self.start)
        self.btn_start.pack(side=tk.LEFT, padx=5)

        self.btn_stop = tk.Button(frame, text="Ferma", width=10, command=self.stop)
        self.btn_stop.pack(side=tk.LEFT, padx=5)

        self.root.protocol("WM_DELETE_WINDOW", self._on_close)

    def _draw_belt(self):
        self.canvas.delete("belt")

        # Nastro a rettangolo bucato: solo bordo, interno vuoto.
        self.canvas.create_rectangle(
            self.belt_x1,
            self.belt_y1,
            self.belt_x2,
            self.belt_y2,
            outline="#374151",
            width=6,
            fill="",
            tags="belt",
        )

    def aggiungi_pacco(self):
        nome = self.input_nome.get().strip() or f"Destinatario {self.next_id}"

        pacco = Pacco(
            nome=nome,
            indirizzo="N/D",
            colore=random.choice(self.colori),
            id_spedizione=self.next_id,
        )
        self.next_id += 1

        y_centro = (self.belt_y1 + self.belt_y2) // 2
        x1 = self.belt_x1 - PACCO_W - 10
        y1 = y_centro - PACCO_H // 2
        x2 = x1 + PACCO_W
        y2 = y1 + PACCO_H

        rect_id = self.canvas.create_rectangle(
            x1,
            y1,
            x2,
            y2,
            fill=pacco.colore,
            outline="#111827",
            width=2,
        )
        text_id = self.canvas.create_text(
            (x1 + x2) // 2,
            (y1 + y2) // 2,
            text=f"ID {pacco.id_spedizione}",
            fill="white",
            font=("Arial", 9, "bold"),
        )

        self.nastro_trasportatore.append({"pacco": pacco, "rect": rect_id, "text": text_id})

    def start(self):
        if not self.running:
            self.running = True
            self._update()

    def stop(self):
        self.running = False
        if self._job is not None:
            self.root.after_cancel(self._job)
            self._job = None

    def _update(self):
        for item in self.nastro_trasportatore:
            self.canvas.move(item["rect"], self.speed_x, 0)
            self.canvas.move(item["text"], self.speed_x, 0)

            x1, y1, x2, y2 = self.canvas.coords(item["rect"])
            if x1 > self.belt_x2 + 10:
                new_x1 = self.belt_x1 - PACCO_W - 10
                shift = new_x1 - x1
                self.canvas.move(item["rect"], shift, 0)
                self.canvas.move(item["text"], shift, 0)

        if self.running:
            self._job = self.root.after(DELAY, self._update)

    def _on_close(self):
        self.stop()
        self.root.destroy()

        