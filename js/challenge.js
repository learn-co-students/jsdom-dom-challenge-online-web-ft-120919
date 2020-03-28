// DONE: As a user, I should see the timer increment every second once the page has loaded
// DONE: I can manually increment and decrement the counter using + and - buttons
// DONE: I can 'like' an individual numbe rof the counter. I should see count of the number of 'likes' associated with that number
// DONE: As a user, I can pause the counter, which should: (1) pause the counter, (2) disable all buttons except pause, (3) pause button shows text 'resume'
// DONE: When 'resume' is clicked, it should restart the counter and re-enable the buttons 
// DONE: As a user, I can leave comments on gameplay

let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let commentForm = document.getElementById("comment-form")
let numLikes = [];
let likes = document.getElementsByClassName("likes")[0];

let comments = document.createElement("ul");
document.getElementById("list").appendChild(comments)

// Play around with where this should go
let time = setInterval(incrementCounter, 1000);

function changeTime() {
  let numTimesPaused = 0;
  
  pause.addEventListener('click', function(event){
    numTimesPaused += 1;
    if (numTimesPaused % 2 == 1) {
      // Pause counter
      clearInterval(time);
    
      // Disable all buttons except pause
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
  
      // Change 'pause' text to 'resume'
      pause.innerText = "resume";
    }
    else {
      // Restart counter
      //paused = false;
      time = setInterval(incrementCounter, 1000);

      // Enable all buttons
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;

      // Change 'resume' text to 'pause'
      pause.innerText = "pause";
    }
  }) //event listener for pause button
} //change time

function incrementCounter() {
  currentNum = parseInt(counter.innerText);
  let nextNum = currentNum + 1;
  counter.innerText = nextNum;
  if (numLikes.length < nextNum){
    numLikes.push(0);
  }
} //increment counter

function decrementCounter() {
  currentNum = parseInt(counter.innerText);
  let nextNum = currentNum - 1;
  counter.innerText = nextNum;
} //decrement counter 

plus.addEventListener('click', function(event) {
  incrementCounter();
}) //event listener for plus button 

minus.addEventListener('click', function(event) {
  decrementCounter();
}) //event listener for minus button

commentForm.addEventListener('submit', function(event) {
  li = document.createElement('li');
  li.innerHTML = document.getElementById("comment-input").value;
  comments.appendChild(li);
  event.preventDefault();
}) //event listener for comment submission

heart.addEventListener('click', function(event){
  currentNum = parseInt(counter.innerText);
  numLikes[currentNum - 1] += 1;

  listItems = document.getElementsByClassName("likes-message");
  let updatedMessage = false; //Keeps track of whether or not an LI has been updated

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].innerHTML.includes(`${currentNum} has`)) {
      listItems[i].innerHTML = `${currentNum} has ${numLikes[currentNum - 1]} likes`;
      updatedMessage = true;
      break;
    } //end if
  } //end for

  if (!updatedMessage) {
    let li = document.createElement('li');
    li.classList.add("likes-message");
    li.innerHTML = `${currentNum} has ${numLikes[currentNum - 1]} likes`;
    likes.appendChild(li);
  }
}) //event listener for heart button

changeTime(); //Is this getting called once? Or over and over?
