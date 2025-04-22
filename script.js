const targetDate = new Date("2018-09-13T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = now - targetDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML = 
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);

document.getElementById("heartBtn").addEventListener("click", () => {
  const container = document.getElementById("videoContainer");
  const vid = document.getElementById("loveVideo");

  container.style.display = "flex";
  vid.muted = false;  // Ensure sound is on
  vid.play();
});
