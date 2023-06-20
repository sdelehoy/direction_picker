const direction = ["&rightarrow;", "&leftarrow;", "&uparrow;"]
const btn = document.getElementById("pick-button")
const txt = document.getElementById("direction-text")

function writeDirection() {
  const random = Math.floor(Math.random() * direction.length)
  txt.innerHTML = direction[random]
}

btn.addEventListener("click", writeDirection)