const arr_likes = []

setInterval(
    function() {
        upCount();
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