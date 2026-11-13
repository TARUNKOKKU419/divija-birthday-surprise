
// DIVIJA BIRTHDAY WEBSITE - BACKGROUND MUSIC

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const surpriseBtn = document.getElementById("surpriseBtn");

let fadeTimer = null;
let surpriseOpened = false;

bgMusic.volume = 0;

// START MUSIC
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
    musicToggle.textContent = "♫ PLAY MUSIC";
    musicStatus.textContent = "Tap MUSIC ON to play ♡";
    return false;
  }
}

// AUTOPLAY ATTEMPT
window.addEventListener("load", () => {
  startMusic();
});

// MUSIC BUTTON
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

// OPEN SURPRISE
function openSurprise() {
  if (surpriseOpened) return;

  surpriseOpened = true;

  // Start music if paused
  if (bgMusic.paused) {
    startMusic();
  }

  const message = document.getElementById("message");
  const admiration = document.getElementById("admiration");

  // Change button text
  surpriseBtn.textContent = "YOUR SURPRISE IS HERE ✨";
  surpriseBtn.disabled = true;

  // Reveal birthday message
  message.style.display = "block";
  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Reveal next section after 2.5 seconds
  setTimeout(() => {
    admiration.style.display = "block";

    admiration.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 2500);
}

// IMPORTANT: CONNECT BUTTON TO FUNCTION
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
