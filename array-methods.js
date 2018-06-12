
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// planets.forEach(planetList)
// function planetList(planet) {
//     const planetEl = document.getElementById("planets");
//     const planetStatement = document.createTextNode(planet);
//     planetEl.appendChild (planetStatement)
//     console.log(planetStatement)
//}
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(planet => {
    const planetEl = document.getElementById("planets");
    const planetStatement = document.createTextNode(planets);
    planetEl.appendChild(planetStatement)
    console.log(`I have been to ${planets}`)
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const newSentence = planets.map(function (planet) {
    const newSentence1 = `${planet.charAt(0).toUpperCase()}${planet.slice(1)}`

    console.log(newSentence1)

    return newSentence1
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


let letterE = planets.filter(planet => {
    const newArray = (planet.includes("e"))
    console.log(newArray)
    return newArray
})

console.log(letterE)




// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let wordList1 = words.reduce( (word1, word2) => word1 + ' ' + word2)
console.log(wordList1)
