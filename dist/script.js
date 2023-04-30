let skillIcons = document.querySelectorAll(".mini-card > i");

skillIcons[1].style.color = "#DD4B25";
skillIcons[2].style.color = "#2091EB";
skillIcons[3].style.color = "#F5C700";
skillIcons[4].style.color = "#E94E31";
skillIcons[5].style.color = "#40B1F7";
skillIcons[6].style.color = "#4886EE";

const texts = ["I'm Julian Perez", "I'm a Web Developer."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typed-text").innerHTML = letter;
  if (letter.length === currentText.length) {
    setTimeout(function () {
      index = 0;
      count++;
      type();
    }, 2000);
  } else {
    setTimeout(type, 100);
  }
}

type();