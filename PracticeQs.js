// If else statement - verifying age for access
let age = 22
let age2 = 100

if(age < 21){
    console.log("You cannot enter the club")
}
else {
    console.log("Welcome!")
}

// If else statement - verifying age for birthday card
if(age2 < 100){
    console.log("Not eligible")
}
else if(age2 === 100){
    console.log("Here is your birthday card from the King!")
}
else{
    console.log("Not eligible, you have already gotten one")
}

// Boolean testing 
console.log(4 === 3)    // False
console.log(5 > 2)      // True
console.log(12 > 12)    // False
console.log(3 < 0)      // False
console.log(3 >= 3)     // True
console.log(11 <= 11)   // True
console.log(3 <= 2)     // False

// ARRAYS tesing - ordered lists of items which are zero-indexed. Arrays can have any datatype you want in an array and can even mix and match datatypes (strings, integers, booleans).
let sayHello = [
    "Hello",          // Index = 0
    "Hi",             // Index = 1
    "Good day"        // Index = 2
]

let myInfo = [
    "James", 30, True       // Example of array with multi data-types
]

// Adding items to arrays >>> use a PUSH method
let cards = [7, 4]
cards.push(6)      // what goes inside the parentheses gets added to the array

// FOR LOOPS in javascript - can use to loop over arrays (main use case often)
//     START        FINISH      STEP SIZE
for (let count = 1; count < 11; count += 1){
    console.log(count)                           // Counts in increments of 1 to 10
}

for (let i = 10; i < 101; i += 10){
    console.log(i)                               // Counts in increments of 10 to 100
}

let messages = [
    "Hello",
    "Hi",
    "Good day",
    "What's up",
    "Howdy"
]
for (let i = 0; i < messages.length; i += 1){
    console.log(messages[i])     // Will log out all of the messages & will take account of indeterminate array length
}

// Manipulating a HTML element with items in an array (create sentence from array items)
let sentence = ["Hello", "my", "name", "is", "James"]

for(i = 0; i < sentence.length; i += 1){
    grettingEl.textContent += sentence[i] + " "
}

// Returning functions in javasript
let player1Time = 102
let player2Time = 107

function fastesTime(){
    if(player1Time < player2Time){
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else{
        return "It's a tie!"
    }
}

let fastestRace = fastestTime()
console.log(fastestTime)

// RANDOM NUMBR GENERATOR in javascript + using to create a dice function
// Use Math.random() function which generates random numbers between 0 to 1 (1 not inclusive). 
// Math.floor() >>> Rounds down number generated to 0 decimal places
let randomNumber = Math.floor(Math.random() * 6) + 1   // This gives a number from 1 to 6
console.log(randomNumber)

// Return random item from array
let hands = ["rock", "paper", "scissors"]

function randomItem(){
    let randomNumber2 = Math.floor(Math.random() * 3)       // Get random number 0, 1, 2
    return hands[randomNumber2]                             // Return the item index of the array based on randomNumber2
}


// OBJECTS IN JAVASCRIPT
//  They give you the ability to stroe data in depth (complex/composite data types). Stored like an array but using curly-brackets instead of square-brackets. 
// Access values using the "dot notation" >>> eg. course.length
let course = {
    title: "Learn CSS Grid",
    lessons: 16,
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.length)  // >>> notation looking for the length in the course object.
console.log(course["tags"]) // >>> can also use a bracket notation to grab objects


// Object + function challenge 
let person = {
    name: "James",
    age: 30,
    country: "England"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

// For loop and array challenge
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

function largestCountries(){
    console.log("The 5 largest countries in the world:")
    for(let i = 0; i < largeCountries.length; i += 1){
        console.log("- " + largeCountries[i])
    }
}

// Pop, push, and shift/unshift to arrays
let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries2.pop()     //Deletes last item in the array
largeCountries2.shift()   // Deletes first item in the array
largeCountries2.push("Pakistan")   // Adds item to end of the array
largeCountries2.unshift("China")   // Adds item to start of the array


// Sort fruit in an array onto separate HTML shelves using for loop, if statement, and textContent
let fruit = ["apple", "orange", "apple", "apple", "orange" ]

function sortFruit(){
    for(i = 0; i < fruit.length; i += 1){
        if(fruit[i] === "apple"){
            appleShelf.textContent += "apple "
        } else if(fruit[i] === "orange") {
            orangeShelf.textContent += "orange "
        }
    }
}