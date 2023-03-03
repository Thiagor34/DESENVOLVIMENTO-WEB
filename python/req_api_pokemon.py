import requests

nome = input('Digite o nome do pokemon: ')

response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{nome}').json()

print('nome:', response['name'])
print('habilidades:', response['abilities'][0]['ability']['name'])
print('altura:', response['height'])
print('peso:', response['weight'])
