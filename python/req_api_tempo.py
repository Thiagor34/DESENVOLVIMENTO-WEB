import requests

cidade = input('Digite o nome da cidade: ')

response = requests.get(f'https://weather.contrateumdev.com.br/api/weather/city/?city={cidade}').json()

print('Cidade:', response['name'])
print('Temp. Atual:',response['main']['temp'],'°C')
print('Temp. Min.:',response['main']['temp_min'],'°C')
print('Temp. Máx.:',response['main']['temp_max'],'°C')