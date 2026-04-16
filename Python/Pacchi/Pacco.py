class Pacco:
	def __init__(self, destinatario_nome, destinatario_indirizzo, colore):
		self._destinatario_nome = destinatario_nome
		self._destinatario_indirizzo = destinatario_indirizzo
		self._colore = colore
		self._id_spedizione = None

	def get_destinatario_nome(self):
		return self._destinatario_nome

	def set_destinatario_nome(self, destinatario_nome):
		self._destinatario_nome = destinatario_nome

	def get_destinatario_indirizzo(self):
		return self._destinatario_indirizzo

	def set_destinatario_indirizzo(self, destinatario_indirizzo):
		self._destinatario_indirizzo = destinatario_indirizzo

	def get_colore(self):
		return self._colore

	def set_colore(self, colore):
		self._colore = colore

	def get_id_spedizione(self):
		return self._id_spedizione

	def set_id_spedizione(self, id_spedizione):
		self._id_spedizione = id_spedizione

	def descrizione_breve(self):
		return f"#{self.get_id_spedizione()} | {self.get_destinatario_nome()}"

	def descrizione_completa(self):
		return (
			f"ID spedizione: {self.get_id_spedizione()}\n"
			f"Destinatario: {self.get_destinatario_nome()}\n"
			f"Indirizzo: {self.get_destinatario_indirizzo()}"
		)
