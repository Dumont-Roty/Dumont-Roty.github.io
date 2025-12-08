document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section').forEach(section => observer.observe(section));

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('#projects .project-card');

  const applyFilter = filter => {
    projectCards.forEach(card => {
      const level = card.dataset.level;
      const match = filter === 'all' || level === filter;
      card.classList.toggle('is-hidden', !match);
    });
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      applyFilter(filter);
    });
  });

  applyFilter('all');
});
