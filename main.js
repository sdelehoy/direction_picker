function writeDirection() {
  const direction = ["right", "left", "straight"]
  const random = Math.floor(Math.random() * direction.length) 
  document.getElementsByClassName("direction-text").innerHTML = direction[random]
}