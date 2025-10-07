from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

try:
    driver.get("file:///C:/Users/denis/source/repos/SuperD3ni/scuola/HTML/GiocoFigureConPunteggio/index.html")
except Exception as e:
    print(e)