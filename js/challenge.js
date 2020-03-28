
const counterGrab = document.querySelector('#counter')
const plusButton = document.querySelector ('#plus')
const minusButton = document.querySelector('#minus')
const pauseButton = document.querySelector('#pause')
const likesButton = document.querySelector("#heart")
const likesUl = document.querySelector(".likes")
const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('.comments')


const timer = setInterval(incrementCounter, 1000)


const likesButtonAction = likesButton.addEventListener('click', function(e) {
  likesUl.innerHTML += `<li>The Counter is currently showing ${counterValue} likes.</li>`
})

function incrementCounter() { 
  counterValue = parseInt(counterGrab.innerText, 10)
  counterGrab.innerText = counterValue + 1
  console.log("hello")
}

function decrementCounter() {
  counterValue - 1
}

function updateCounter() {
  
}


const plusButtonAction = plusButton.addEventListener('click', function(e) {
  counterValue = parseInt(counterGrab.innerText, 10)
  const upValue = counterValue + 1
  counterGrab.innerText = upValue
})

const minusButtonAction = minusButton.addEventListener('click', function(e) {
  const counterValue = parseInt(counterGrab.innerText, 10)
  const downValue = counterValue - 1
  counterGrab.innerText = downValue
})

const commentListener = commentForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const comment = commentForm.querySelector("#comment-input").value
  commentList.innerHTML += `<p>${comment}</p>`
  commentForm.reset() 
})

const pauseButtonAction = pauseButton.addEventListener('click', function(e) {
  clearInterval(timer)
})