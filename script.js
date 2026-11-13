
const bgMusic = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");

let fadeTimer = null;
let surpriseOpened = false;

// BACKGROUND MUSIC
function startMusic() {
  if (!bgMusic) return;

  if (!bgMusic.paused) return;

  bgMusic.play()
    .then(() => {
      clearInterval(fadeTimer);

      let volume = 0;

      bgMusic.volume = 0;

      fadeTimer = setInterval(() => {
        volume = Math.min(volume + 0.05, 0.7);
        bgMusic.volume = volume;

        if (volume >= 0.7) {
          clearInterval(fadeTimer);
        }
      }, 150);
    })
    .catch(error => {
      console.log("Music playback error:", error);
    });
}

// TRY MUSIC AUTOPLAY
window.addEventListener("load", () => {
  startMusic();
});

// MOBILE FIRST TOUCH
document.addEventListener("touchstart", startMusic, {
  once: true
});

// DESKTOP FIRST CLICK
document.addEventListener("click", startMusic, {
  once: true
});

// BIRTHDAY SURPRISE
function openSurprise() {
  if (surpriseOpened) return;

  surpriseOpened = true;

  // Start music on surprise button click
  startMusic();

  const message = document.getElementById("message");
  const admiration = document.getElementById("admiration");

  if (!message || !admiration) return;

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

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", openSurprise);
}

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
