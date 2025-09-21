import requests
from bs4 import BeautifulSoup
import csv
import pandas as pd
from collections import Counter

base_url = 'http://quotes.toscrape.com'
all_quotes = []

for page in range(1, 11):
    url = f'{base_url}/page/{page}/'
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')

    quotes = soup.find_all('div', class_='quote')

    for quote in quotes:
        text = quote.find('span', class_='text').text
        author = quote.find('small', class_='author').text
        all_quotes.append({'autore': author, 'citazione': text})
    
with open('citazioni.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['autore', 'citazione']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(all_quotes)

df = pd.read_csv('citazioni.csv')
print(df.head())
print("Autori più citati:")
print(df['autore'].value_counts().head(5))
all_text = ' '.join(df['citazione'])
words = all_text.lower().split()
word_counts = Counter(words)
print("\nParole più comuni:")
print(word_counts.most_common(10))