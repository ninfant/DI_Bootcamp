import requests
import psycopg2
import random

# Database connection function
def get_connection():
    return psycopg2.connect(
        database='countriesDCH',
        user='xxx',
        password='xxx',
        host='localhost',
        port='5432'
    )

def fetch_random_countries():
    """Fetches country data from the REST API and inserts 10 random countries into the database."""
    
    #Fetch Data from API
    response = requests.get("https://restcountries.com/v3.1/all")
    data = response.json()

    # Ensure data exists
    if not isinstance(data, list) or len(data) < 10:
        print("Error: API data is missing or insufficient")
        return

    #  Select 10 Unique Random Countries
    random_countries = random.sample(data, 10)

    #  Insert into the database
    connection = get_connection()
    cursor = connection.cursor()

    for country in random_countries:
        # avoiding KeyErrors
        name = country.get("name", {}).get("official", "Unknown").replace("'", "`")
        capital = country.get("capital", ["Unknown"])[0].replace("'", "`")
        flag_code = country.get("flag", "🏳️")
        region = country.get("region", "Unknown")
        population = country.get("population", 0)

      
        cursor.execute(
            """INSERT INTO random_countries (name, capital, flag_code, region, population) 
               VALUES (%s, %s, %s, %s, %s)""",
            (name, capital, flag_code, region, population)
        )

    connection.commit()
    cursor.close()
    connection.close()
    print("10 Random Countries Inserted Successfully!")


fetch_random_countries()