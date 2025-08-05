function playSound() {
  const clickSound = new Audio("assets/on.mp3");
  // clickSound.currentTime = 0;
  clickSound.play();
  console.log(clickSound.currentTime);
}

function toggleBulb() {
  const bulb = document.getElementById("bulb");
  const toggle = document.getElementById("toggleSwitch");
  if (toggle.checked) {
    bulb.src = "assets/pic_bulbon.gif";
    playSound();
  } else {
    bulb.src = "assets/pic_bulboff.gif";
    playSound();
  }
}
