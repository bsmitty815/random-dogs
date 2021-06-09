
const newDogButton = document.getElementById('new-dog-button')
const favDogButton = document.getElementById('add-to-favorites-button')
favDogButton.addEventListener('click', saveDogToFavs)
newDogButton.addEventListener('click', fetchRandomDog)
const breedDropDown = document.getElementById('myDropDown');
const searchBreedButton = document.getElementById('search-breed-button')
searchBreedButton.addEventListener('click', searchBreed)

    function fetchRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(randomDog =>  {
        renderDog(randomDog)
    })
    .catch(error => {
        console.log(error)
    })
    }

fetchRandomDog()

    function renderDog(randomDog) { //this adds a random dog to div random dog image
        const div = document.getElementById('random-dog-image')
        div.innerHTML = '';
        const divTwo = document.createElement('div')
        const dogImage = document.createElement('img')
        const dogBreedDiv = document.createElement('div')
        dogImage.src = randomDog.message
        div.appendChild(divTwo)
        divTwo.appendChild(dogImage)
        divTwo.appendChild(dogBreedDiv)
        //get breed name through below method
        const dogUrl = randomDog.message
        const dogUrlSliceOne = dogUrl.slice(30)
        const dogUrlSplit = dogUrlSliceOne.split('/')
        const dogBreedName = dogUrlSplit.slice(0,1)
        dogBreedDiv.innerText = `Dog Breed: ${dogBreedName}`
    }

    function fetchDogForDropDown() { //fetch the list of full breeds
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(dogBreeds =>  {
            renderDogForDropDown(Object.keys(dogBreeds.message))
        })
        .catch(error => {
            console.log(error)
        })
    }

fetchDogForDropDown()

    function renderDogForDropDown(dogBreed) { //lop through all the breeds and add them to drop down

        for (let i = 0; i < dogBreed.length; i++) { //creates a value and a text for the drop down options
            const option = document.createElement('option')
            option.value = dogBreed[i];
            option.text = dogBreed[i];
            breedDropDown.appendChild(option);
        }
    }
  
    function searchBreed() { //fetch by breed and send to renderDog so it can be added to the html
        let breedSelected = breedDropDown.value
        console.log(breedSelected)
        fetch(`https://dog.ceo/api/breed/${breedSelected}/images/random`)
        .then(response => response.json())
        .then(breeds =>  {
            renderDog(breeds)
        })
        .catch(error => {
            console.log(error)
        }) 
    }

    function getNewDog() { //this fetches the new dog once new dog button is clicked
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(randomDog =>  {
            console.log(randomDog)
            renderDog(randomDog)
    })
        .catch(error => {
            console.log(error)
    })
    }

    function saveDogToFavs() { //this adds the new dog to the save fave dogs div
        const favDog = document.querySelector("#random-dog-image > div > img")    //selecting the image on the page
        const div = document.getElementById('my-fav-dogs')
        const deleteButton = document.createElement('button')
        const dogImage = document.createElement('img');
        const imageDiv = document.createElement('div');
        const buttonDiv = document.createElement('div');
        dogImage.src = favDog.src; //this gets the specific image source of the current image
        div.appendChild(imageDiv);
        imageDiv.id = dogImage.src //gives the div the same id
        deleteButton.id = dogImage.src //give the div the same id
        imageDiv.appendChild(dogImage);
        imageDiv.appendChild(buttonDiv)
        buttonDiv.appendChild(deleteButton)
        deleteButton.innerText = 'Delete'
        deleteButton.addEventListener('click', () => deleteFavPic(favDog))
    }

    function deleteFavPic(favDog) { //deletes the fav dog
        const div = document.getElementById(favDog.src)
        div.remove();
    }