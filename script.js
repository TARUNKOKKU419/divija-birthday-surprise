
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const surpriseBtn = document.getElementById("surpriseBtn");

let fadeTimer = null;
let surpriseOpened = false;

bgMusic.volume = 0;

// BACKGROUND MUSIC
async function startMusic() {
  if (!bgMusic.paused) return true;

  try {
    await bgMusic.play();

    musicToggle.textContent = "♫ MUSIC ON";
    musicStatus.textContent = "♪ Premalu - Insecurities BGM";

    clearInterval(fadeTimer);

    bgMusic.volume = 0;
    let volume = 0;

    fadeTimer = setInterval(() => {
      volume = Math.min(volume + 0.05, 0.7);
      bgMusic.volume = volume;

      if (volume >= 0.7) {
        clearInterval(fadeTimer);
      }
    }, 150);

    return true;
  } catch (error) {
    musicStatus.textContent = "Tap anywhere to play ♡";
    musicToggle.textContent = "♫ PLAY MUSIC";
    return false;
  }
}

// TRY MUSIC WHEN WEBSITE LOADS
window.addEventListener("load", () => {
  startMusic();
});

// START MUSIC ON FIRST SCREEN TAP/CLICK
document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("#musicToggle")) return;

  if (bgMusic.paused) {
    startMusic();
  }
}, { once: true });

// MUSIC ON/OFF BUTTON
musicToggle.addEventListener("click", async () => {
  if (bgMusic.paused) {
    await startMusic();
  } else {
    bgMusic.pause();
    clearInterval(fadeTimer);

    musicToggle.textContent = "♫ MUSIC OFF";
    musicStatus.textContent = "Music paused";
  }
});

// BIRTHDAY SURPRISE BUTTON
function openSurprise() {
  if (surpriseOpened) return;

  surpriseOpened = true;

  if (bgMusic.paused) {
    startMusic();
  }

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
