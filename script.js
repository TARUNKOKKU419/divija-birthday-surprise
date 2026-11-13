
const bgMusic = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");

let fadeTimer = null;
let surpriseOpened = false;

// BACKGROUND MUSIC
if (bgMusic) {
  bgMusic.volume = 0;

  async function startMusic() {
    if (!bgMusic.paused) return;

    try {
      await bgMusic.play();

      clearInterval(fadeTimer);

      let volume = 0;

      fadeTimer = setInterval(() => {
        volume = Math.min(volume + 0.05, 0.7);
        bgMusic.volume = volume;

        if (volume >= 0.7) {
          clearInterval(fadeTimer);
        }
      }, 150);

    } catch (error) {
      console.log("Browser blocked autoplay.");
    }
  }

  // TRY AUTOPLAY WHEN WEBSITE OPENS
  window.addEventListener("load", startMusic);

  // FALLBACK: FIRST USER INTERACTION
  document.addEventListener("pointerdown", startMusic, {
    once: true
  });
}

// BIRTHDAY SURPRISE
function openSurprise() {
  if (surpriseOpened) return;

  surpriseOpened = true;

  if (bgMusic && bgMusic.paused) {
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
