const direction = ["right", "left", "straight"]
const random = Math.floor(Math.random() * direction.length)

function writeDirection() {
  document.getElementById("direction-text").innerHTML = direction[random]
}