
const bgMusic = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const surpriseBtn = document.getElementById("surpriseBtn");

let fadeTimer = null;
let surpriseOpened = false;

// START EXPERIENCE AND MUSIC
startBtn.addEventListener("click", async () => {

  // Start music directly from user's tap
  bgMusic.volume = 0;

  try {
    await bgMusic.play();

    let volume = 0;

    clearInterval(fadeTimer);

    fadeTimer = setInterval(() => {
      volume = Math.min(volume + 0.05, 0.7);
      bgMusic.volume = volume;

      if (volume >= 0.7) {
        clearInterval(fadeTimer);
      }
    }, 150);

  } catch (error) {
    console.log("Music playback error:", error);
  }

  // Start birthday animation
  document.body.classList.add("started");
  startScreen.classList.add("hide");

  setTimeout(() => {
    startScreen.remove();
  }, 1000);

});

// MUSIC FALLBACK
function startMusic() {
  if (!bgMusic || !bgMusic.paused) return;

  bgMusic.play().catch(error => {
    console.log("Music playback error:", error);
  });
}

// BIRTHDAY SURPRISE
function openSurprise() {
  if (surpriseOpened) return;

  surpriseOpened = true;

  startMusic();

  const message = document.getElementById("message");
  const admiration = document.getElementById("admiration");

  surpriseBtn.textContent = "YOUR SURPRISE IS HERE ✨";
  surpriseBtn.disabled = true;

  message.style.display = "block";

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  setTimeout(() => {
    admiration.style.display = "block";

    admiration.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 2500);
}

surpriseBtn.addEventListener("click", openSurprise);

// FLOATING GOLDEN SPARKLES
for (let i = 0; i < 22; i++) {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";
  sparkle.textContent = "✦";

  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.animationDelay = Math.random() * 8 + "s";

  sparkle.style.animationDuration =
    (6 + Math.random() * 6) + "s";

  document.body.appendChild(sparkle);
}
