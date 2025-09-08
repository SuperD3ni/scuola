import requests

# L'URL della pagina da cui vogliamo "pescare" i dati
url = "httttttps://www.example.com"

print(f"--- Sto tentando di raccogliere i dati da {url} ---")

try:
    # Usiamo la nostra "canna da pesca" per ottenere la pagina
    response = requests.get(url, timeout=10)

    # L'HTML è il nostro dato non strutturato. È un blocco di testo caotico.
    html_grezzo = response.text
   
    print("\nSUCCESSO! Ho raccolto i dati grezzi.")
    print("Ecco un assaggio dei primi 700 caratteri :")
    print("-" * 50)
    print(html_grezzo[:700])
    print("-" * 50)

except requests.exceptions.RequestException as e:
    print(f"ERRORE: Impossibile raccogliere i dati. Causa: {e}")
