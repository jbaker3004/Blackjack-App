// Create variables for game
let cards = []  // Creating an array in JS to reference to the cards
let sum = 0
let hasBlackJack = false     // VARIABLE TO UNDERSTAND IF PLAYER HAS BLACKJACK
let isAlive = false         // VARIABLE TO UNDERSTAND IF PLAYER IS IN THE GAME
let outputMessage = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Different way of getting an element from HTML:  let sumEl = document.querySelector("#sum-el") 
// This method makes it easier to select classes, IDs, and CSS elements (header, body, etc.)


// Create Player and Chips Object & post to webpage
let player = {
    name: "James",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// Random card number generator function
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
}

// Function for starting and playing the game. If statements to print depending on scenario.
function startGame(){
    isAlive = true      // Change isAlive variable to true (starts as false above)
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]  // Add first and 2nd cards to the cards array
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i +=1){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        outputMessage = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        outputMessage = "Congratulations! Blackjack!"
        hasBlackJack = true                 // If they win change variable to true
    }
    else {
        outputMessage = "Sorry, you've gone bust!"
        isAlive = false                    // If gone bust, then log not alive
    }

    // Log out correct messages for cards, sum, and ouputMessage
    messageEl.textContent = outputMessage
}

// Function for drawing new card. 
function newCard(){
    // NewCard drawn and added to sum, only if isAlive and does not have Blackjack
    if(isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
