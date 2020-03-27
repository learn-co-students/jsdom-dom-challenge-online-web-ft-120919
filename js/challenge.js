document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter')

    let count = setInterval(function() {
        counter.innerText++;
    }, 1000);

    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');

    minus.addEventListener("click", function() {
        counter.innerText--;
    });

    plus.addEventListener("click", function() {
        counter.innerText++;
    });

    let heart = document.getElementById('heart');
    let likes = document.querySelector(".likes");

    heart.addEventListener("click", function() {
        let obj = document.getElementById(`${counter.innerText}`);
        if (obj) {
            obj.children[0].innerText++
        } 
        else {
            likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
        }
    });

    let pause = document.getElementById('pause');

    pause.addEventListener("click", function() {
        if (pause.innerText == "pause") {
            pause.innerText = "resume";

            clearInterval(count);

            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
        }
        else {
            pause.innerText = "pause";

            count = setInterval(function() {
                counter.innerText++;
            }, 1000);

            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
        }
    });

    let submitBtn = document.getElementById("submit")
    let commentList = document.getElementById("list")

    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });
});
