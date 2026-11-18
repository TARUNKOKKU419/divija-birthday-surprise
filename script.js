
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const admiration = document.getElementById("admiration");
const finalReveal = document.getElementById("finalReveal");

let surpriseOpened = false;

/* START WEBSITE AND MUSIC */

startBtn.addEventListener("click", async () => {
  startScreen.classList.add("hide");

  document.body.classList.add("started");

  bgMusic.volume = 0.7;

  try {
    await bgMusic.play();
  } catch (error) {
    console.log("Music playback could not start:", error);
  }
});

/* SURPRISE REVEAL */

function openSurprise() {
  if (surpriseOpened) return;

  if (!message || !admiration || !finalReveal) {
    console.error("A required reveal section is missing.");
    return;
  }

  surpriseOpened = true;

  surpriseBtn.disabled = true;
  surpriseBtn.textContent = "YOUR SURPRISE IS HERE ✨";

  message.style.display = "block";

  setTimeout(() => {
    admiration.style.display = "block";

    admiration.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 2500);

  setTimeout(() => {
    finalReveal.classList.add("show");

    finalReveal.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 6500);
}

surpriseBtn.addEventListener("click", openSurprise);

/* FLOATING GOLDEN SPARKLES */

function createSparkles() {
  for (let i = 0; i < 45; i++) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.textContent = Math.random() > 0.5 ? "✦" : "✧";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.fontSize = (Math.random() * 12 + 8) + "px";
    sparkle.style.animationDuration = (Math.random() * 6 + 6) + "s";
    sparkle.style.animationDelay = (Math.random() * 8) + "s";

    document.body.appendChild(sparkle);
  }
}

createSparkles();
