
const bgMusic = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const surpriseBtn = document.getElementById("surpriseBtn");

let fadeTimer = null;
let surpriseOpened = false;

/* BACKGROUND MUSIC */

function startMusic() {
  if (!bgMusic || !bgMusic.paused) return;

  bgMusic.volume = 0;

  bgMusic.play()
    .then(() => {
      clearInterval(fadeTimer);

      let volume = 0;

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

/* TAP TO BEGIN */

if (startBtn && startScreen) {
  startBtn.addEventListener("click", () => {
    startMusic();

    document.body.classList.add("started");
    startScreen.classList.add("hide");

    setTimeout(() => {
      startScreen.style.display = "none";
    }, 1000);
  });
}

/* BIRTHDAY SURPRISE */

function openSurprise() {
  if (surpriseOpened) return;

  const message = document.getElementById("message");
  const admiration = document.getElementById("admiration");
  const finalReveal = document.getElementById("finalReveal");

  if (!message || !admiration || !finalReveal || !surpriseBtn) return;

  surpriseOpened = true;

  surpriseBtn.textContent = "YOUR SURPRISE IS HERE ✨";
  surpriseBtn.disabled = true;

  message.style.display = "block";

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  /* ADMIRATION REVEAL */

  setTimeout(() => {
    admiration.style.display = "block";

    admiration.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    /* GRAND FINAL REVEAL */

    setTimeout(() => {
      finalReveal.classList.add("show");

      setTimeout(() => {
        finalReveal.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 500);

    }, 5000);

  }, 2500);
}

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", openSurprise);
}

/* 45 FLOATING GOLDEN SPARKLES */

for (let i = 0; i < 45; i++) {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";
  sparkle.textContent = Math.random() > 0.5 ? "✦" : "✧";

  sparkle.style.left = Math.random() * 100 + "vw";

  sparkle.style.fontSize =
    (10 + Math.random() * 18) + "px";

  sparkle.style.animationDelay =
    (Math.random() * 8) + "s";

  sparkle.style.animationDuration =
    (7 + Math.random() * 7) + "s";

  document.body.appendChild(sparkle);
}
