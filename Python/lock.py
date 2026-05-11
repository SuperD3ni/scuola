import tkinter as tk
import threading
import time

class PallinaIncrocio(threading.Thread):
    def __init__(self, canvas, x, y, color, dx, dy, centro_lock):
        super().__init__()
        self.daemon = True
        self.canvas = canvas
        self.radius = 20
        self.color = color
        self.dx = dx
        self.dy = dy
        self.x = x
        self.y = y
        self.centro_lock = centro_lock
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
            # Tenta di acquisire il lock. Se è occupato, la pallina si ferma (non aggiorna x, y)
            acquisito = self.centro_lock.acquire(blocking=False)
            if acquisito:
                self.occupando_centro = True
            else:
                return 

        # Se è uscita dalla zona critica, rilascia il lock per l'altra pallina
        if self.occupando_centro and not in_zona_critica:
            self.centro_lock.release()
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

    semaforo_centro = threading.Lock()
    p_rossa = PallinaIncrocio(canvas, 50, 200, "red", 5.5, 0, semaforo_centro)
    p_blu = PallinaIncrocio(canvas, 300, 50, "blue", 0, 3.2, semaforo_centro)

    p_rossa.start()
    p_blu.start()

    root.mainloop()

if __name__ == "__main__":
    main()