import tkinter as tk
import threading
import time

class GestoreIncrocio:
    def __init__(self):
        # Max 2 auto per direzione.
        self.sem_ns = threading.Semaphore(2)
        self.sem_ew = threading.Semaphore(2)
        # Direzioni opposte non possono sovrapporsi nell'incrocio.
        self.sem_incrocio = threading.Semaphore(1)

        self.mutex_contatori = threading.Lock()
        self.lock_ingresso_ns = threading.Lock()
        self.lock_ingresso_ew = threading.Lock()
        self.ns_incrocio = 0
        self.ew_incrocio = 0

    def entra(self, direzione):
        if direzione == "NS":
            self.sem_ns.acquire()
            # Serializza il "primo ingresso" della direzione NS per evitare sorpassi.
            with self.lock_ingresso_ns:
                first = False
                with self.mutex_contatori:
                    if self.ns_incrocio == 0:
                        first = True
                if first:
                    self.sem_incrocio.acquire()
                with self.mutex_contatori:
                    self.ns_incrocio += 1
            return

        self.sem_ew.acquire()
        # Serializza il "primo ingresso" della direzione EW per evitare sorpassi.
        with self.lock_ingresso_ew:
            first = False
            with self.mutex_contatori:
                if self.ew_incrocio == 0:
                    first = True
            if first:
                self.sem_incrocio.acquire()
            with self.mutex_contatori:
                self.ew_incrocio += 1

    def esce(self, direzione):
        if direzione == "NS":
            ultimo = False
            with self.mutex_contatori:
                self.ns_incrocio -= 1
                if self.ns_incrocio == 0:
                    ultimo = True
            if ultimo:
                self.sem_incrocio.release()
            self.sem_ns.release()
            return

        ultimo = False
        with self.mutex_contatori:
            self.ew_incrocio -= 1
            if self.ew_incrocio == 0:
                ultimo = True
        if ultimo:
            self.sem_incrocio.release()
        self.sem_ew.release()


class PallinaIncrocio(threading.Thread):
    def __init__(self, canvas, x, y, color, dx, dy, gestore_incrocio, direzione):
        super().__init__()
        self.daemon = True
        self.canvas = canvas
        self.radius = 20
        self.color = color
        self.dx = dx
        self.dy = dy
        self.x = x
        self.y = y
        self.gestore_incrocio = gestore_incrocio
        self.direzione = direzione
        self.occupando_centro = False
        
        self.id = self.canvas.create_oval(
            self.x - self.radius, self.y - self.radius,
            self.x + self.radius, self.y + self.radius,
            fill=self.color, outline="black"
        )

    def run(self):
        while True:
            start_time = time.time()
            self.aggiorna_logica()
            
            elapsed = time.time() - start_time
            time.sleep(max(0, (1/60) - elapsed))

    def aggiorna_logica(self):
        prossima_x = self.x + self.dx
        prossima_y = self.y + self.dy

        # Definiamo i confini della "zona critica"
        in_zona_critica = (240 < prossima_x < 360) and (140 < prossima_y < 260)

        if in_zona_critica and not self.occupando_centro:
            self.gestore_incrocio.entra(self.direzione)
            self.occupando_centro = True

        # Se è uscita dalla zona critica, rilascia il permesso per far passare altre palline.
        if self.occupando_centro and not in_zona_critica:
            self.gestore_incrocio.esce(self.direzione)
            self.occupando_centro = False

        # Movimento
        self.x += self.dx
        self.y += self.dy

        # Rimbalzo bordi
        if self.x - self.radius <= 0 or self.x + self.radius >= 600:
            self.dx *= -1
        if self.y - self.radius <= 0 or self.y + self.radius >= 400:
            self.dy *= -1

        # Aggiornamento grafico
        self.canvas.coords(
            self.id, 
            self.x - self.radius, self.y - self.radius,
            self.x + self.radius, self.y + self.radius
        )

def main():
    root = tk.Tk()
    root.title("Incroci Multipli con Precedenza")
    
    canvas = tk.Canvas(root, width=600, height=400, bg="white", highlightthickness=0)
    canvas.pack()

    canvas.create_line(0, 200, 600, 200, fill="#c44747")
    canvas.create_line(300, 0, 300, 400, fill="#4837a6")

    # Visualizzazione zona critica
    canvas.create_rectangle(240, 140, 360, 260, outline="#11d52b")

    gestore = GestoreIncrocio()
    # EW = Est-Ovest, NS = Nord-Sud
    p_rossa = PallinaIncrocio(canvas, 50, 200, "red", 5.5, 0, gestore, "EW")
    p_blu = PallinaIncrocio(canvas, 300, 50, "blue", 0, 3.2, gestore, "NS")
    p_verde = PallinaIncrocio(canvas, 550, 200, "green", -5.0, 0, gestore, "EW")
    p_gialla = PallinaIncrocio(canvas, 300, 350, "yellow", 0, -3.8, gestore, "NS")
    p_arancione = PallinaIncrocio(canvas, 120, 200, "orange", 4.7, 0, gestore, "EW")
    p_viola = PallinaIncrocio(canvas, 300, 110, "purple", 0, 2.9, gestore, "NS")
    p_ciano = PallinaIncrocio(canvas, 480, 200, "cyan", -4.4, 0, gestore, "EW")
    p_magenta = PallinaIncrocio(canvas, 300, 290, "magenta", 0, -2.6, gestore, "NS")

    p_rossa.start()
    p_blu.start()
    p_verde.start()
    p_gialla.start()
    p_arancione.start()
    p_viola.start()
    p_ciano.start()
    p_magenta.start()

    root.mainloop()

if __name__ == "__main__":
    main()