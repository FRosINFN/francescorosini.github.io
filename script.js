const titles = [
  "Theoretical Particle Physicist",
  "PhD Student in Physics",
  "BESIII Collaboration Member"
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

const typed = document.getElementById("typed-title");

function typeEffect() {

  const current = titles[titleIndex];

  if (deleting) {
    typed.textContent = current.substring(0, charIndex--);
  } else {
    typed.textContent = current.substring(0, charIndex++);
  }

  let speed = deleting ? 50 : 90;

  if (!deleting && charIndex > current.length) {
    deleting = true;
    speed = 1800;
  }

  if (deleting && charIndex < 0) {
    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
