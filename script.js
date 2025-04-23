
  // Function to toggle the mobile menu
  function toggleMenu() {
    const leftMenu = document.querySelector('.left');
    const hamburger = document.querySelector('.hamburger');

    leftMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  // Hover shift effect for non-mobile screens
  const cards = document.querySelectorAll('.card-pair');
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  if (!isMobile) {
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        const cardTop = card.getBoundingClientRect().top;

        for (let i = index + 1; i < cards.length; i++) {
          const nextCard = cards[i];
          const nextTop = nextCard.getBoundingClientRect().top;

          // Shift only cards on the same row
          if (Math.abs(nextTop - cardTop) < 5) {
            nextCard.style.transform = 'translateX(150px)';
          } else {
            break;
          }
        }
      });

      card.addEventListener('mouseleave', () => {
        cards.forEach(c => c.style.transform = 'translateX(0)');
      });
    });
  } else {
    console.log('🧸 Media query triggered – hover shift disabled on mobile');
  }

