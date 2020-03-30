document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("comment-form")
  const pause = document.getElementById("pause")
  const minus = document.getElementById("minus")
  const plus = document.getElementById("plus")
  const heart = document.getElementById("heart")
  const likes = document.querySelector("ul.likes")
  const submit = document.querySelector("#submit")
  const like_hash = {}

  let counter = document.getElementById("counter")

  let count = setInterval(function () {
    counter.innerText++
  }, 1000)

  pause.addEventListener("click", function (e) {
    if (pause.innerText == "pause") {
      pause.innerText = "resume"
      clearInterval(count)

      plus.disabled = true
      minus.disabled = true
      heart.disabled = true
      submit.disabled = true
    }
    else {
      count = setInterval(function () {
        counter.innerText++
      }, 1000);
      pause.innerText = "pause"

      plus.disabled = false
      minus.disabled = false
      heart.disabled = false
      submit.disabled = false
    }
  })

  plus.addEventListener("click", function () {
    counter.innerText++
  })

  minus.addEventListener("click", function () {
    counter.innerText--
  })

  heart.addEventListener("click", function () {

    let id = parseInt(document.getElementById("counter").innerText)
    let existingLi = document.getElementById(id)
    if (existingLi) {
      updateLikes(existingLi)
    } else {
      let li = document.createElement('li')
      li.id = id
      updateLikes(li)
    }

    function updateLikes(li) {
      if (like_hash[id]) {
        like_hash[id] += 1
      } else {
        like_hash[id] = 1
      }
      li.innerHTML = `${id} has been liked ${like_hash[id]} ${like_hash[id] == 1 ? "time" : "times"}`
      likes.appendChild(li)
    }
  })

  form.addEventListener("submit", addComment)

  function addComment(e) {
    event.preventDefault()
    const commentInput = document.getElementById("comment-input")
    const comment = commentInput.value
    const comments = document.getElementById("list")
    comments.innerHTML += `<p> ${comment} </p>`
    commentInput.value = ""
  }

})