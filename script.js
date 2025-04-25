function toggleMenu() {
  const navMenu = document.getElementById("navmenu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}
// Hover shift effect for non-mobile screens
const cards = document.querySelectorAll(".card-pair");
const isMobile = window.matchMedia("(max-width: 600px)").matches;

if (!isMobile) {
  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      const cardTop = card.getBoundingClientRect().top;

      for (let i = index + 1; i < cards.length; i++) {
        const nextCard = cards[i];
        const nextTop = nextCard.getBoundingClientRect().top;

        // Shift only cards on the same row
        if (Math.abs(nextTop - cardTop) < 5) {
          nextCard.style.transform = "translateX(150px)";
        } else {
          break;
        }
      }
    });

    card.addEventListener("mouseleave", () => {
      cards.forEach((c) => (c.style.transform = "translateX(0)"));
    });
  });
} else {
  console.log("🧸 Media query triggered – hover shift disabled on mobile");
}

document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".plus-button");
  const cards = document.querySelectorAll(".card");
  const videos = document.querySelectorAll(".card-video");

  cards.forEach((card) => {
    const video = card.querySelector(".card-video");

    card.addEventListener("mouseenter", function () {
      if (video) {
        video.play();
      }
    });

    card.addEventListener("mouseleave", function () {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });

  plusButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      const card = this.closest(".card");

      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        card.style.width = "700px";
        card.querySelector(".card-details").style.left = "50%";
        card.querySelector(".card-details").style.opacity = "1";
        const video = card.querySelector(".card-video");
        if (video) {
          video.style.filter = "blur(0)";
          video.play();
        }
      } else {
        card.style.width = "350px";
        card.querySelector(".card-details").style.left = "100%";
        card.querySelector(".card-details").style.opacity = "0";
        const video = card.querySelector(".card-video");
        if (video) {
          video.style.filter = "blur(5px)";
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".card")) {
      cards.forEach((card) => {
        card.classList.remove("active");
        card.style.width = "350px";
        card.querySelector(".card-details").style.left = "100%";
        card.querySelector(".card-details").style.opacity = "0";
        const video = card.querySelector(".card-video");
        if (video) {
          video.style.filter = "blur(5px)";
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  });
});

// Add an event listener for hover on each card
const card = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Reduce the size of the h2 when hovering over the card
    const heading = card.querySelector("h2");
    heading.style.fontSize = "16px"; // Smaller font size
  });

  card.addEventListener("mouseleave", () => {
    // Restore the original size when mouse leaves the card
    const heading = card.querySelector("h2");
    heading.style.fontSize = ""; // Reset to original size
  });
});
