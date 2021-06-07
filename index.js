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

function renderDog(randomDog) {
    //console.log(randomDog)
    const div = document.getElementById('random-dog-image')
    div.innerHTML = '';
    const span = document.createElement('span')
    const dogImage = document.createElement('img')
    // need to create image size no more then certain width
    dogImage.src = randomDog.message
    div.appendChild(span)
    span.appendChild(dogImage)

}

//newDogButton.addEventListener('click', getNewDog);//runs the function of creating a new dog again


function getNewDog() {
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

//add event listner for each button
//once new dog buttin is clicked run rendordog function again to change the dog
//newDogButton.addEventListener('click', () => renderDog(randomDog));//runs teh function of creating a new dog again

function saveDogToFavs() {
    console.log('fav clicked')
    const favDog = document.querySelector("#random-dog-image > span > img") //selecting the image on the page
    const div = document.getElementById('my-fav-dogs')
    const deleteButton = document.createElement('button')
    const dogImage = document.createElement('img');
    const span = document.createElement('div');
    dogImage.src = favDog.src; //this gets teh specific image source of the current image
    div.appendChild(span);
    span.appendChild(dogImage);
    span.appendChild(deleteButton)
    deleteButton.innerText = 'Delete'
    //delete button
    //get the image
    //get div element
    //add image to div

}