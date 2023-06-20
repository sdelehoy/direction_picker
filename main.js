const direction = ["&rightarrow;", "&leftarrow;", "&uparrow;"]

function writeDirection() {
  const random = Math.floor(Math.random() * direction.length)
  document.getElementById("direction-text").innerHTML = direction[random]
}

document.getElementById("pick-button").addEventListener("click", writeDirection)