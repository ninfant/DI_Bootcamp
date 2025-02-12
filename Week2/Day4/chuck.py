import requests

# response = requests.get("http://api.open-notify.org/iss-now.json")

# print(response.json)

response = requests.get("https://api.chucknorris.io/jokes/random?category=dev")

data = response.text
print(response.request.url)
print(response.request.body)