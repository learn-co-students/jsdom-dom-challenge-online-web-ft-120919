document.addEventListener("DOMContentLoaded", init);

function init(){
    // start the timer
    startTimer();
// take care of the comments
    const commentForm = document.getElementById("comment-form");
    // add a listener for the form to submit!
        commentForm.addEventListener("submit", addCommentToDOM);
  // take care of + & - of counter
    let minus = document.getElementById("minus");
        minus.addEventListener("click", decrementCounter);
    let plus = document.getElementById("plus");
        plus.addEventListener("click", incrementCounter);
    // take care of heart
    let heart = document.getElementById("heart");
        heart.addEventListener("click", likeCount);
    let pause = document.getElementById("pause");
        pause.addEventListener("click", pauseCounter);

}
function startTimer(){
    timer  = setInterval(incrementTimer, 1000);
}

function incrementTimer(){
    let counter = document.getElementById("counter");
        let counterValue = parseInt(counter.innerText);
    counter.innerText = counterValue + 1;
}

function pauseCounter(event) {
    toggleStateOfBttn();
}

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++)
            c[b] = a[b];
        return c
    }
    return Array.from(a)
}

function toggleStateOfBttn(){

    let bttnsCllction = document.getElementsByTagName("button");
    let bttns = _toConsumableArray(bttnsCllction);
    bttns.forEach(
        (button)=>{
            if (button.id=="pause"){
                if (button.innerText=="resume") {
                    startTimer();// restart the timer
                    button.innerText="pause";// change bttn to pause for future pausing
                } else {
                    clearInterval(timer);// pause the timer
                    button.innerText="resume"; // change bttn to resume for future resumption
                }
            } else{
                button.disabled = !(button.disabled)
            }
        }
    )
}

function likeCount(event){
    let counter = document.getElementById("counter");
        let counterValue = parseInt(counter.innerText);
    let likesDiv = document.querySelector(".likes");
    let liTag = document.createElement("li");
        liTag.setAttribute("number", counterValue);
    // check if this number is already in the list of likes <li number="3">...</li>
    let liNumber =  document.querySelector('[number="' + counterValue + '"]');
    let counterLikeTxt;
    if (liNumber !=null){
        // if this number has already been liked
        counterLikeTxt =  counterValue + " has been liked <span>" + (counterValue+ 1) + "</span> times.";
    } else{
        counterLikeTxt =  counterValue + " has been liked <span>1</span> time.";
    }
    liTag.innerHTML=counterLikeTxt;
    likesDiv.appendChild(liTag);
}

function decrementCounter(event){
    let counter = document.getElementById("counter");
        let counterValue = parseInt(counter.innerText);
    counter.innerText = counterValue - 1;
}

function incrementCounter(event){
    let counter = document.getElementById("counter");
        let counterValue = parseInt(counter.innerText);
    counter.innerText = counterValue + 1;
}

function addCommentToDOM(event) {
    event.preventDefault()
    const commentInput = document.getElementById("comment-input")
    const comment = commentInput.value
        commentInput.value =""
    const commentsList = document.getElementById("list")
        commentsList.innerHTML += `<br><ul><li>${comment}</li></ul></br>`
  }