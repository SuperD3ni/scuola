class Smartphone:
    def __init__(self, modello, memoria):
        self.modello = modello
        self.memoria = memoria

    def __str__(self):
        return f"Smartphone: modello: {self.modello}, memoria: {self.memoria}GB"