document.querySelectorAll('.feature-card, .step-card, .wallet-card, .merchant-card, .timeline article').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = `opacity .55s ease ${index * 0.04}s, transform .55s ease ${index * 0.04}s`;
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature-card, .step-card, .wallet-card, .merchant-card, .timeline article').forEach((card) => io.observe(card));
