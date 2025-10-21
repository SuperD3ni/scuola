from sigma import Banca, Persona, ContoCorrente, BancomatPersonale
            
# Crea l'oggetto Banca
banca = Banca("BancaSigma")

# Crea i clienti
cliente1 = Persona("Mario", "Rossi")
cliente2 = Persona("Laura", "Bianchi")

# Imposta i saldi iniziali e registra alcune transazioni iniziali
# Cliente 1
cliente1.carta.conto_associato.deposita(1000.00)
cliente1.carta.conto_associato.preleva(50.00)
banca.aggiungi_cliente(cliente1)

# Cliente 2
cliente2.carta.conto_associato.deposita(500.00)
banca.aggiungi_cliente(cliente2)

# Salva l'oggetto Banca serializzato
banca.salva_dati('banca_dati.pkl')
print(f"\nFile 'banca_dati.pkl' creato e salvato con successo.")

# Stampa le credenziali per il test
print("\n-------------------------------------------")
print("Clienti di Esempio Creati (utili per il test):")

print(f"\nCliente 1: {cliente1.nome} {cliente1.cognome}")
print(f"  Codice Carta: {cliente1.carta.codice_carta}")
print(f"  PIN: {cliente1.carta.pin}")
print(f"  Saldo Iniziale: {cliente1.carta.conto_associato.get_saldo():.2f} EUR")

print(f"\nCliente 2: {cliente2.nome} {cliente2.cognome}")
print(f"  Codice Carta: {cliente2.carta.codice_carta}")
print(f"  PIN: {cliente2.carta.pin}")
print(f"  Saldo Iniziale: {cliente2.carta.conto_associato.get_saldo():.2f} EUR")
print("-------------------------------------------")


    