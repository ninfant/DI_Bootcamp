const container = document.getElementById('myContainer')
const mybtn = document.getElementById('mybtn').addEventListener('click', dispalyInfoDOM )


async function getStarWarsCharacters(id){
const url = `https://www.swapi.tech/api/people/${id}` 
 try {
    const response = await fetch(url)
    if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }
    const mydata = await response.json()
    const character = mydata.result.properties 

    //to execute both requests in parallel using Promise.all
    const [homeworldName] = await Promise.all([
            getHomeworldName(character.homeworld)
        ])
    return { ...character, homeworld: homeworldName } // using spread operator 

 } catch (error) {
    console.error(`Failed to fetch GIFs: ${error.message}`)
        return null
 }
}

async function getHomeworldName(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }
        
        const data = await response.json()
        return data.result.properties.name // i get the name of the planet form the url of Homeworld property

    } catch (error) {
        console.error(`Failed to fetch homeworld: ${error.message}`)
        return "Unknown" 
    }
}

async function dispalyInfoDOM(event) {
    event.preventDefault()
    
    const randomNum = getRandomNumber(1, 83)
    const dataContainer = document.getElementById('randomDataContainer')
    const loadingContainer = document.getElementById('loadingContainer')

    //Mostrar el loader antes de obtener datos
    dataContainer.innerHTML = ''
    loadingContainer.style.display = 'block'

    const characterData = await getStarWarsCharacters(randomNum)

    // Ocultar el loader una vez se obtienen los datos
    loadingContainer.style.display = 'none'

    if (characterData) {
        const { name, height, gender, birth_year, homeworld } = characterData

        const nameEl = document.createElement("h1")
        nameEl.textContent = name;

        const heightEl = document.createElement("p")
        heightEl.textContent = `📏 Height: ${height} cm`

        const genderEl = document.createElement("p")
        genderEl.textContent = `⚥ Gender: ${gender}`

        const birthEl = document.createElement("p");
        birthEl.textContent = `🎂 Birth Year: ${birth_year}`

        const homeworldEl = document.createElement("p");
        homeworldEl.textContent = `🌍 Homeworld: ${homeworld}`

        dataContainer.appendChild(nameEl)
        dataContainer.appendChild(heightEl)
        dataContainer.appendChild(genderEl)
        dataContainer.appendChild(birthEl)
        dataContainer.appendChild(homeworldEl)
    }
}

// to get a random number between 1 and 83
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


