const arr_likes = [];
const pause_button = document.querySelector("#pause");

document.addEventListener("DOMContentLoaded", () => {  
setInterval(
    function() {
        if (isRunning()){
        upCount();
        }
    }, 1000);

document.querySelector("#minus").addEventListener("click", function(event) {
    downCount()
})

document.querySelector("#plus").addEventListener("click", function(event) {
    upCount()
})

document.querySelector("#heart").addEventListener("click", function(event) {
    // listening for when heart is clicked

    // when heart is clicked do these things

    const likes = document.querySelector('.likes');
    // say how many times number has been liked
    // add boolean for if li has been updated
    let bool = false;

    // create li and give li a class
    
    
    // get current number which is count
    let count = parseInt(document.getElementById("counter").innerText);
    
    arr_likes[count -1] += 1;
    
    // elem.innerText = `${count} has ${arr_likes[count-1]} likes`;
    
    // loop through all lis to see if this count is in the list of lis
    // if count is in list then update
    // still in loop but not in first if, check to see if has not been updated then add 
    let array_li = document.getElementsByClassName("liClass");

    for (let i = 0; i < array_li.length; i++) {
        if (array_li[i].innerHTML.includes(`${count} has`)) {
            // debugger
            array_li[i].innerHTML = `${count} has ${arr_likes[count-1]} likes`;
            bool = true;
            // find that class and update it
            // elem.innerText = `${count} has ${arr_likes[count-1]} likes`; 
        }
    }
            if (!bool){
                
                const elem = document.createElement("li");
                elem.classList.add("liClass");
                elem.innerText = `${count} has ${arr_likes[count-1]} likes`;
                likes.appendChild(elem)
            }
    
})

document.querySelector("#comment-form").addEventListener("submit", function(event) {
    event.preventDefault()
    if (document.querySelector("#comment-input").value !== ""){
    let input = document.querySelector("#comment-input").value
    let elem = document.createElement("li");
    elem.innerText = input
    document.getElementById("list").appendChild(elem);
    document.getElementById("comment-input").value = "";
    }
    
  });

  pause_button.addEventListener("click", function(event) {
    // console.log('paused?')  
    if (isRunning()) {
          pause_button.innerText = "resume";
          document.getElementById("minus").disabled = true;
          document.getElementById("plus").disabled = true;
          document.getElementById("heart").disabled = true;
          document.getElementById("submit").disabled = true;
      } else {
          pause_button.innerText = "pause";
          document.getElementById("minus").disabled = false;
          document.getElementById("plus").disabled = false;
          document.getElementById("heart").disabled = false;
          document.getElementById("submit").disabled = false;
      }
  })
// pause counter
// select pause
// disable buttons for plus, minus, and like and submit

// pause button says resume


// when resume is clicked start counter and again button are abled again

});

function upCount() {
    let count = parseInt(document.getElementById("counter").innerText);
        // debugger
    count += 1;
    document.getElementById("counter").innerText = count;
    //  push
    if (arr_likes.length < count) {
        arr_likes.push(0)
    }
}

function downCount() {
    let count = parseInt(document.getElementById("counter").innerText);
        // debugger
    count -= 1;
    document.getElementById("counter").innerText = count;
}

// helper function ternary isRunning
function isRunning() {
    // console.log('running')
    if (pause_button.innerText === "pause") {
        return true 
    } else {
        return false
    }  
}