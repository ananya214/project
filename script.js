const cards = document.querySelectorAll('.card-pair');

cards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    const cardTop = card.getBoundingClientRect().top;

    for (let i = index + 1; i < cards.length; i++) {
      const nextCard = cards[i];
      const nextTop = nextCard.getBoundingClientRect().top;

      // Only shift cards on same row
      if (nextTop === cardTop) {
        nextCard.style.transform = 'translateX(150px)';
      } else {
        break;
      }
    }
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.transform = 'translateX(0)'); // Reset all
  });
});