import requests

url = "https://pokeapi.co/api/v2/pokemon/ditto"
resposta = requests.get(url)
dados = resposta.json()

# Acessando o nome e uma habilidade
nome_pokemon = dados["name"]
habilidade_principal = dados["abilities"][0]["ability"]["name"]

print(f"Nome do Pokémon: {nome_pokemon}")
print(f"Primeira Habilidade: {habilidade_principal}")
