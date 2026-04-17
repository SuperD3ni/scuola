from Pacco import Pacco


class Nastro:

	def __init__(self):
		self.nastro_trasportatore = []
		self.prossimo_id = 1

	def _assegna_id_se_mancante(self, pacco):
		if pacco.get_id_spedizione() is None:
			pacco.set_id_spedizione(self.prossimo_id)
			self.prossimo_id += 1

	def aggiungi_in_coda(self, pacco):
		self._assegna_id_se_mancante(pacco)
		self.nastro_trasportatore.append(pacco)

	def aggiungi_in_testa(self, pacco):
		self._assegna_id_se_mancante(pacco)
		self.nastro_trasportatore.insert(0, pacco)

	def rimuovi_per_id(self, id_spedizione):
		for i, pacco in enumerate(self.nastro_trasportatore):
			if pacco.get_id_spedizione() == id_spedizione:
				return self.nastro_trasportatore.pop(i)
		return None

	def reinserisci_in_indice(self, pacco, indice):
		if indice < 0:
			indice_sicuro = 0
		elif indice > len(self.nastro_trasportatore):
			indice_sicuro = len(self.nastro_trasportatore)
		else:
			indice_sicuro = indice
		self.nastro_trasportatore.insert(indice_sicuro, pacco)

	def spedisci_testa(self):
		if not self.nastro_trasportatore:
			return None
		return self.nastro_trasportatore.pop(0)

	def lista_pacchi(self):
		return self.nastro_trasportatore
