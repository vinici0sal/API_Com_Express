import requests as re
import time
from playwright.sync_api import sync_playwright

conta = 'carajastic'
email = 'vinicius.loreto@carajas.com.br'
senha = 'xXz2564cC2@'

dic_param = {
    'departament_id' : '354ec06cd7959d59b7b36249a9b6b032',
    'idcliente' : 'rm@naoresponda.carajas.com.br'
}

token = "9f7789a024271a8b5c2f5f6abaad6a26"
api = f"https://api.tomticket.com/chamados/{token}/0"

resp = re.get(api, data=dic_param)

# Convertendo a resposta para JSON
jso = resp.json()

# Verificando se a chave 'data' existe e não está vazia
if "data" in jso :
    # Acessando o 'idchamado' no primeiro item da lista
    tentativa = jso["data"][1]["protocolo"]
    print(f"O protocolo do chamado é: {tentativa}")
else:
    print("A chave 'data' está vazia ou não existe no JSON.")

with sync_playwright() as play:
    brow = play.chromium.launch(headless=False)
    page = brow.new_page();

    
    page.goto("https://painel.tomticket.com/painel.html#!/")
    time.sleep(2)
    page.fill('xpath = /html/body/div/form/input[1]', conta)
    page.fill('xpath = /html/body/div/form/input[2]', email)
    page.fill('xpath = /html/body/div/form/input[3]', senha)
    
    page.locator('xpath = /html/body/div/form/button').click()
    time.sleep(8)


    try :
        page.fill('xpath = /html/body/div[5]/div/form/input', tentativa)
        page.keyboard.press('Enter')
    
        page.keyboard.press('Enter')

    except:
        print("tente novamente")

    time.sleep(40)
