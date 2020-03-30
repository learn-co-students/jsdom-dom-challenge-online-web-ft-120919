const counter = document.getElementById("counter")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const likesButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")
const likesUl = document.querySelector(".likes")
const commentForm = document.querySelector("#comment-form")
const commentList = document.querySelector(".comments")

const timer = setInterval(incrementCounter, 1000)

const likesButtonAction = likesButton.addEventListener("click", function(event){
  likesUl.innerHTML += `<li>The Counter is currently at ${counterVar} likes.</li>`
})

function incrementCounter() {
  counterVar = parseInt(counter.innerText, 10)
  counter.innerText = counterVar +1
  console.log("Hello")
};

function decreaseCounter() {
  counterVar -1
};

function updateCounter() {

};
const minusButtonAction = minusButton.addEventListener("click", function(event) {
  counterVar = parseInt(counter.innerText, 10)
  const downValue = counterVar - 1
  counter.innerText = downValue
})

const plusButtonAction = plusButton.addEventListener("click", function(event) {
  counterVar = parseInt(counter.innerText, 10)
  const upValue = counterVar + 1
  counter.innerText = upValue
})

const commentListener = commentForm.addEventListener("submit", function(event){
  event.preventDefault()
  const comment = commentForm.querySelector("#comment-input").value
  commentList.innerHTML += `<P>${comment}</P>`
  commentForm.reset()
})

const pauseButtonAction = pauseButton.addEventListener("click", function(event){
  clearInterval(timer)
})