let numElem = document.querySelector('h1#counter')
let likesList = document.querySelector('ul.likes')
let minusButton = document.querySelector('button#minus')
let plusButton = document.querySelector('button#plus')
let heartButton = document.querySelector('button#heart')
let submitButton = document.querySelector('form#comment-form button#submit')

document.addEventListener('DOMContentLoaded', () => {
    timerInt = setInterval(timer, 1000)
})

minusButton.addEventListener('click', function(event) {
    numElem.textContent = parseInt(numElem.textContent) - 1
})

plusButton.addEventListener('click', function(event) {
    numElem.textContent = parseInt(numElem.textContent) + 1
})

heartButton.addEventListener('click', function(event) {
    let possibleLi = document.querySelector(`li[data-num="${numElem.textContent}"`)
    if (possibleLi == null) {
        let listElem = document.createElement('li')
        likesList.appendChild(listElem)
        listElem.setAttribute('data-num', `${numElem.textContent}`)
        listElem.innerHTML = `${numElem.textContent} has been liked <span>1</span> time`
    } else {
        let newNum = parseInt(possibleLi.querySelector('span').textContent) + 1
        possibleLi.querySelector('span').textContent = newNum
        let wordArray = possibleLi.innerHTML.split(' ')
        wordArray[5] = 'times'
        possibleLi.innerHTML = wordArray.join(' ')
    }
})

document.querySelector('button#pause').addEventListener('click', function(event) {
     let button = document.querySelector('button#pause')

    if (button.textContent == " pause ") {
        clearInterval(timerInt)
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true
        submitButton.disabled = true
        button.textContent = "resume"
    } else {
        timerInt = setInterval(timer, 1000)
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false
        submitButton.disabled = false
        button.textContent = " pause "
    }
})

document.querySelector('form#comment-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let comment = document.querySelector('form input#comment-input').value
    let commentP = document.createElement('p')
    document.querySelector('div div#list').appendChild(commentP)
    commentP.innerHTML = comment
})

function timer() {
    numElem.textContent = parseInt(numElem.textContent) + 1
}