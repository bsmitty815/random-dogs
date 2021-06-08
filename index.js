// api - https://dog.ceo/api/breeds/image/random Fetch!

const newDogButton = document.getElementById('new-dog-button')
const favDogButton = document.getElementById('add-to-favorites-button')
favDogButton.addEventListener('click', saveDogToFavs)
newDogButton.addEventListener('click', fetchRandomDog)

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
    const span = document.createElement('span')
    const dogImage = document.createElement('img')
    dogImage.src = randomDog.message
    div.appendChild(span)
    span.appendChild(dogImage)

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
    console.log('fav clicked')
    const favDog = document.querySelector("#random-dog-image > span > img") //selecting the image on the page
    const div = document.getElementById('my-fav-dogs')
    const deleteButton = document.createElement('button')
    const dogImage = document.createElement('img');
    const imageDiv = document.createElement('div');
    const buttonDiv = document.createElement('div');
    dogImage.src = favDog.src; //this gets teh specific image source of the current image
    div.appendChild(imageDiv);
    imageDiv.id = dogImage.src //gives the div the same id
    deleteButton.id = dogImage.src //give the div the same id
    imageDiv.appendChild(dogImage);
    imageDiv.appendChild(buttonDiv)
    buttonDiv.appendChild(deleteButton)
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', () => deleteFavPic(favDog))
}

function deleteFavPic(favDog) {
    console.log(favDog.src)
    const div = document.getElementById(favDog.src)
    div.innerHTML = '';
}