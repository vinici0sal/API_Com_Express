import requests as re

altura = 1.68
peso = 77

chamar_api = re.get(f"http://localhost:8080/?peso={peso}&altura={altura}")

print(re.status_codes)
print(chamar_api)
print(chamar_api.json())