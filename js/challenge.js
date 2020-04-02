const counter = document.getElementById('counter');
let timer;

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');

const likes = document.getElementsByClassName('likes')[0];
const list = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');

function changeCount(add) {
  let count = parseInt(counter.innerText);
  if(add === true) {
    count ++;
  } else {
    count --;
  }
  counter.innerText = `${count}`;
}

function counterAdd() {
  changeCount(true);
}

function counterSubtract() {
  changeCount(false);
}

// function toggleCounter() {
//   if (pause.textContent == "pause") {
//     pause.textContent = "resume"
//     window.clearInterval(timer)
//   }
//   else {
//     pause.textContent = "pause";
//     timer = window.setInterval(counterAdd, 1000);
//   }
// }

function createNewListItem(countKey) {
  let item = document.createElement('li');
  item.id = `likes-for-count-${countKey}`;
  item.innerText = `Count ${countKey} has 1 like.`;
  likes.appendChild(item);
}

function addToListItem(item) {
  const text = item.innerText;
  const countExtractor = /Count (\d+) has (\d+) likes?/;
  item.innerText = text.replace(countExtractor, (match, count, likesDigits, offset, string) => {
    const likes = parseInt(likesDigits);
    return `Count ${count} has ${likes + 1} likes`;
  });
}

function changeLikes() {
  const countKey = parseInt(counter.innerText);
  const item = document.getElementById(`likes-for-count-${countKey}`);
  if (item === null) {
    createNewListItem(countKey);
  } else {
    addToListItem(item);
  }
}

function addComment(event) {
  event.preventDefault();
  const newCommentText = commentInput.value;
  const newComment = document.createElement('li');
  newComment.innerText = newCommentText;
  newComment.className = "comments";
  list.appendChild(newComment);
}


function initButtons() {
  timer = window.setInterval(counterAdd, 1000);
  plus.addEventListener('click', counterAdd);
  minus.addEventListener('click', counterSubtract);
  heart.addEventListener('click', changeLikes);
  pause.removeEventListener('click', initButtons);
  pause.addEventListener('click', remove);
  pause.innerText = "pause"
}

function remove() {
  window.clearInterval(timer);
  plus.removeEventListener('click', counterAdd);
  minus.removeEventListener('click', counterSubtract);
  heart.removeEventListener('click', changeLikes);
  pause.removeEventListener('click', remove);
  pause.addEventListener('click', initButtons);
  pause.innerText = "resume";
}

/* Instructions were slightly unclear as to whether the comments form should
   also be disabled when the counter is paused, so I went ahead and left
   it working even when paused, hence the separate init function. */
function initForm() { commentForm.addEventListener('submit', addComment); }

function initAll() {
  initButtons();
  initForm();
}

document.addEventListener('DOMContentLoaded', initAll);
