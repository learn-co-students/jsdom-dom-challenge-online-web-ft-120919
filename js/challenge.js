const counter = document.getElementById('counter')
let timerStatus = true
let timeCount
let pauseButton = document.querySelector('#pause')
let plusBtn = document.querySelector('#plus')
let minusBtn = document.querySelector('#minus')
let heartBtn = document.querySelector('#heart')
let ul = document.getElementsByClassName('likes')[0]

document.addEventListener('DOMContentLoaded', function() {
  startTimer()
  enableButtons()
  pauseButton.addEventListener('click', toggleTimer)
  document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault()
    addComment()
  })
})

function startTimer() {
  timeCount = window.setInterval(incrementTimer, 1000)
}

function incrementTimer() {
  counter.innerText = parseInt(counter.innerText) + 1
}

function decrementTimer() {
  counter.innerText = parseInt(counter.innerText) - 1
}

function likeTimer() {
  let num = parseInt(counter.innerText)

  // if li already exists with number, add 'like' to that
  let li = findLiWithNum(num)
  if (li) {
    let liNum = parseInt(li.innerText)
    let numLikes = parseInt(li.innerText.split(' - ')[1]) + 1
    li.innerText = `${liNum} - ${numLikes} likes`
  } else { // otherwise, add new li with that number
    let li = document.createElement('li')
    li.innerText = `${num} - 1 like`
    ul.appendChild(li)
  }
}

function findLiWithNum(number) {
  let liAry = ul.children
  for (let li of liAry) {
    if (parseInt(li.innerText) == number) {
      return li
    }
  }
  return false
}

function disableButtons() {
  plusBtn.removeEventListener('click', incrementTimer)
  minusBtn.removeEventListener('click', decrementTimer)
  heartBtn.removeEventListener('click', likeTimer)
}

function enableButtons() {
  plusBtn.addEventListener('click', incrementTimer)
  minusBtn.addEventListener('click', decrementTimer)
  heartBtn.addEventListener('click', likeTimer)
}

function toggleTimer() {
  if (timerStatus == true) {
    clearInterval(timeCount)
    timerStatus = false
    pauseButton.innerText = 'resume'
    disableButtons()
  } else {
    counter.innerText = 0
    startTimer()
    timerStatus = true
    pauseButton.innerText = 'pause'
    enableButtons()
  }
}

function addComment() {
  let comment = document.getElementById('comment-input').value
  let commentList = document.getElementById('list')
  let newComment = document.createElement('p')
  newComment.innerText = comment
  commentList.appendChild(newComment)

}
