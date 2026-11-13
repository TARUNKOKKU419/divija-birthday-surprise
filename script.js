// DIVIJA BIRTHDAY WEBSITE - BACKGROUND MUSIC

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");

let fadeTimer = null;

bgMusic.volume = 0;

// Start the BGM. Browsers may block autoplay with sound until a user taps.
async function startMusic() {
  if (!bgMusic.paused) return true;

  try {
    await bgMusic.play();

    musicToggle.textContent = "♫ MUSIC ON";
    musicStatus.textContent = "♪ Premalu - Insecurities BGM";

    // Smooth fade-in to 70% volume.
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
    musicStatus.textContent = "Tap MUSIC ON to play ♡";
    musicToggle.textContent = "♫ PLAY MUSIC";
    return false;
  }
}

// Attempt autoplay as soon as the page loads.
window.addEventListener("load", () => {
  startMusic();
});

// First interaction anywhere except the music button starts music.
// This avoids starting and immediately pausing it on the music button.
document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("#musicToggle")) return;
  if (bgMusic.paused) startMusic();
}, { once: true });

// Music ON/OFF button.
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
  const message = document.getElementById("message");
  const admiration = document.getElementById("admiration");
  const button = document.getElementById("surpriseBtn");

  if (button.disabled) return;

  // The surprise button is also a user gesture, so it can start the BGM.
  if (bgMusic.paused) startMusic();

  button.disabled = true;
  button.style.opacity = ".5";
  button.innerHTML = "A LITTLE MAGIC FOR YOU ✨";

  message.style.display = "block";

  setTimeout(() => {
    admiration.style.display = "block";
  }, 2500);
}

// FLOATING GOLDEN SPARKLES
for (let i = 0; i < 22; i++) {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";
  sparkle.textContent = "✦";
  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.animationDelay = Math.random() * 8 + "s";
  sparkle.style.animationDuration = (6 + Math.random() * 6) + "s";

  document.body.appendChild(sparkle);
}
