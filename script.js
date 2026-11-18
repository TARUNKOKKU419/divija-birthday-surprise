
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");
const surpriseBtn = document.getElementById("surpriseBtn");
const bgMusic = document.getElementById("bgMusic");

const message = document.getElementById("message");
const admiration = document.getElementById("admiration");
const finalReveal = document.getElementById("finalReveal");

let surpriseOpened = false;

/* START WEBSITE AND PLAY MUSIC */

startBtn.addEventListener("click", async () => {
  startScreen.classList.add("hide");

  mainContent.classList.add("show");

  // Music starts after the user's tap
  bgMusic.volume = 0.7;

  try {
    await bgMusic.play();
  } catch (error) {
    console.log("Music could not start:", error);
  }

  setTimeout(() => {
    startScreen.style.display = "none";
  }, 1100);
});

/* OPEN BIRTHDAY SURPRISE */

surpriseBtn.addEventListener("click", () => {
  if (surpriseOpened) return;

  surpriseOpened = true;

  surpriseBtn.textContent = "MADE WITH LOVE ♡";
  surpriseBtn.disabled = true;

  message.classList.add("visible");

  setTimeout(() => {
    admiration.classList.add("visible");
  }, 2500);

  setTimeout(() => {
    finalReveal.classList.add("visible");
  }, 5000);

  setTimeout(() => {
    message.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 300);
});

/* FLOATING SPARKLES */

function createSparkle() {
  const sparkle = document.createElement("span");

  sparkle.classList.add("sparkle");
  sparkle.textContent = "✦";

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.fontSize = (10 + Math.random() * 15) + "px";
  sparkle.style.animationDuration = (5 + Math.random() * 6) + "s";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 11000);
}

setInterval(createSparkle, 450);
