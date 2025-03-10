const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];
            const robotInfo = robots.map(({name, email, image }) => ({
            name,email, image
            }))

            const cardsContainer = document.getElementById('cards')// will contain all the cards
            const inputUser= document.getElementById('name')


            const messageContainer = document.createElement('p') // Element to display the message in case there are no robots when filtering
            messageContainer.style.display = 'none' // Inicialmente oculto
            cardsContainer.appendChild(messageContainer)

            // Function to display robots or message error if thrre is no coincidence with the search name
            function displayRobots(filteredRobots) {
            cardsContainer.innerHTML = '' // Clear previous cards

            if (filteredRobots.length === 0) {
            messageContainer.textContent = 'No robot found with that name!!!'
            messageContainer.style.display = 'block'
            messageContainer.classList.add('no-results-message')
            cardsContainer.appendChild(messageContainer)
            } else {
            messageContainer.style.display = 'none'
            filteredRobots.forEach(robot => 
            {
                const {name, email, image} = robot

                const myCard = document.createElement('div') // creation of each card I need
                myCard.classList.add('card') // i added my class card form css using classList
                
                const img = document.createElement('img')
                img.src = image;
                img.classList.add('card-img')
                myCard.appendChild(img)

                const nameElement = document.createElement('h2')
                nameElement.textContent = name
                myCard.appendChild(nameElement)

                const pEmail = document.createElement('p')
                pEmail.textContent = email
                myCard.appendChild(pEmail)

                cardsContainer.appendChild(myCard)
            })
        }
    }
           

            // Function to filter robots based on input
            function filterMyInput(){
            let inputUserEntry = inputUser.value.trim().toLowerCase()
            let result = robotInfo.filter(robot => robot.name.toLowerCase().includes(inputUserEntry))
            displayRobots(result)
            }
            
            inputUser.addEventListener('input', filterMyInput) // Event listener for search input
            // Initially display all robots
            displayRobots(robotInfo)  