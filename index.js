// api - https://dog.ceo/api/breeds/image/random Fetch!

const newDogButton = document.getElementById('new-dog-button')
const favDogButton = document.getElementById('add-to-favorites-button')


fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(randomDog =>  {
    renderDog(randomDog)
})
.catch(error => {
    console.log(error)
})

function renderDog(randomDog) {
    console.log(randomDog)
    const div = document.getElementById('random-dog-image')
    div.innerHTML = '';
    const span = document.createElement('span')
    const dogImage = document.createElement('img')
    // need to create image size no more then certain width
    dogImage.src = randomDog.message
    div.appendChild(span)
    span.appendChild(dogImage)
    console.log(randomDog.message)
    favDogButton.addEventListener('click', () => saveDogToFavs(randomDog))

}

newDogButton.addEventListener('click', getNewDog);//runs the function of creating a new dog again


function getNewDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(randomDog =>  {
        renderDog(randomDog)
})
    .catch(error => {
        console.log(error)
})
}

//add event listner for each button
//once new dog buttin is clicked run rendordog function again to change the dog
//newDogButton.addEventListener('click', () => renderDog(randomDog));//runs teh function of creating a new dog again

function saveDogToFavs(randomDog) {
    //console.log(randomDog)
    const div = document.getElementById('my-fav-dogs')
    const deleteButton = document.createElement('button')
    const dogImage = document.createElement('img');
    const span = document.createElement('span');
    dogImage.src = randomDog.message;
    div.appendChild(span);
    span.appendChild(dogImage);
    span.appendChild.deleteButton
    deleteButton.innerText = 'Delete'
    //delete button
    //get the image
    //get div element
    //add image to div

}