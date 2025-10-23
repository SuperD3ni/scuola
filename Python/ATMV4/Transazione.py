import datetime

# formatta la transazione in una stringa leggibile
class Transazione:
    def __init__(self, tipo_operazione = "N/A", importo = 0, saldo_post_operazione = 0):
        self.data_ora = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.tipo_operazione = tipo_operazione
        self.importo = importo
        self.saldo_post_operazione = saldo_post_operazione
    def __str__(self):
        return f"[{self.data_ora}] {self.tipo_operazione}: {self.importo:.2f} EUR | Saldo: {self.saldo_post_operazione:.2f} EUR"