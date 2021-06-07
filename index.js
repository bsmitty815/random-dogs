// api - https://dog.ceo/api/breeds/image/random Fetch!



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
    const ul = document.createElement('ul')
    const dogImage = document.createElement('img')
    dogImage.src = randomDog.message
    div.appendChild(ul)
    ul.appendChild(dogImage)
}