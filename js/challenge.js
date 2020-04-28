document.addEventListener("DOMContentLoaded", () => {

  // select html element counter
  const counter = document.querySelector('#counter');

  // select pause button 
  const pauseButton = document.getElementById("pause");

  // select plus button
  const plusButton = document.getElementById("plus");

  // select minus button
  const minusButton = document.getElementById("minus");

  // select heart button
  const heartButton = document.getElementById("heart");

  // select likes ul
  const likesUl = document.querySelector(".likes");

  // select submit button
  const submitButton = document.getElementById("submit");

  // select comment text field
  const commentField = document.getElementById("comment-input");

  // select comment list div
  const commentsList = document.getElementById("list");

  // declare counter in outer scope for start and stop methods
  let intervalCounter;

  // declare and assign initial value of paused to false
  let paused = false;

  // declare initial counter value
  let counterValue = 0;

  // declare likesArray
  let likesArray = [];

  //decrements counterValue only if it will not result in negative number
  function decrementCounter() {
    if (counterValue > 0) {
      counterValue--;
    }
  }

  // displays the current counterValue in html element
  function renderCounter() {
    counter.innerText = counterValue;
  };
  
  // increments counter value and re-renders at repeating intervals
  function startIntervalCounter () {
    intervalCounter = setInterval(function() {
      counterValue++;
      renderCounter();
    }, 1000);
  }

  // stops the interval counter
  function stopIntervalCounter () {
    clearInterval(intervalCounter);
  }

  // searches for object in likesArray with id value equal to int
  function findNumberObject(int) {
    return likesArray.find(obj => obj.id == int);
  }

  // increments likes for number if exists or adds new object
  function likeNumber(int) {
    let number = findNumberObject(int);
    if (!!number) {
      number.likes++;
    }
    else {
      let newNumber = {id: int, likes: 1};
      likesArray.push(newNumber);
    }
    displayLikes();
  }

  // populates liksUL with lis and text corresponding to likesArray data
  function displayLikes() {
    // remove all children from likesUl
    while (likesUl.firstElementChild) {
      likesUl.removeChild(likesUl.lastElementChild);
    }

    // creates li items for numbers with likes and appends them to ul
    likesArray.forEach(function(item) {
      let numberLi = document.createElement("li");
      let liText = document.createTextNode(generateLikeText(item));
      numberLi.appendChild(liText);
      likesUl.appendChild(numberLi);
    });
  }

  // generates a string with proper pluralization for an object in likesArray
  function generateLikeText(item) {
    if (item.likes == 1) {
      return `${item.id} has 1 like.`;
    } 
    else {
      return `${item.id} has ${item.likes} likes.`;
    }
  }

  // enables or disables all buttons depending on status of pause
  function toggleButtons() {
    if (paused == true) {
      // disable buttons
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      submitButton.disabled = true;
    }
    else {
      // enable buttons
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      submitButton.disabled = false;
    }
  }

  // listen for pause button click to toggle start / stop of interval counter
  pauseButton.addEventListener("click", function() {
    paused = !paused;
    if (paused == true) {
      stopIntervalCounter();
      toggleButtons();
      pauseButton.innerText = "resume";
    }
    else {
      startIntervalCounter();
      toggleButtons();
      pauseButton.innerText = "pause";
    };
  });

  // add eventListener for + button then increment and renders counter
  plusButton.addEventListener("click", function() {
    counterValue++;
    renderCounter();
  });

  // listen for click - button then decrement and render counter
  minusButton.addEventListener("click", function() {
    decrementCounter();
    renderCounter();
  });

  // listen for click heart button then add likes to a number
  heartButton.addEventListener("click", function () {
    likeNumber(counterValue);
  });

  // selects contents of text input field on comment form and returns string
  function getCommentText() {
    return commentField.value;
  }

  function displayComment(string) {
    let newP = document.createElement("p");
    let text = document.createTextNode(string);
    newP.appendChild(text);
    commentsList.appendChild(newP);
  }

  // listen for submit button click
  submitButton.addEventListener("click", function() {
    // prevent default post action
    event.preventDefault();
    // grab text area content
    let text = getCommentText();
    // display comment
    if (text == "") {
      return null;
    }
    else {
      displayComment(text);
    };
  });

  // start the counter on load
  startIntervalCounter();

});