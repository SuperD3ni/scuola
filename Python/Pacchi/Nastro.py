from Pacco import Pacco
from ListaConcatenata import ListaConcatenata


class Nastro:

	def __init__(self):
		self.nastro_trasportatore = ListaConcatenata()
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
		self.nastro_trasportatore.prepend(pacco)

	def rimuovi_per_id(self, id_spedizione):
		return self.nastro_trasportatore.remove_first_where(
			lambda pacco: pacco.get_id_spedizione() == id_spedizione
		)

	def reinserisci_in_indice(self, pacco, indice):
		self.nastro_trasportatore.insert_at(indice, pacco)

	def spedisci_testa(self):
		return self.nastro_trasportatore.pop_front()

	def lista_pacchi(self):
		return self.nastro_trasportatore
