const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let timerId = null
let countdownTimerId = 10

function randomSquare() {
    squares.forEach(square => { //Clears mole
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 28)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    currentTime = 10
    result = 0
    score.textContent = result
    timerId = setInterval(randomSquare, 1000)
    countdownTimerId = setInterval(countdown, 1000)
}


function countdown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) { 
        clearInterval(countdownTimerId)
        clearInterval(timerId)
        alert("Time's up! Your final score is: " + result)
    }
}
