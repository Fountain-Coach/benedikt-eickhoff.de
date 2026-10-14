(() => {
  const navButton = document.querySelector('[data-nav-toggle]');
  const rail = document.querySelector('[data-site-rail]');
  if (navButton && rail) {
    navButton.addEventListener('click', () => {
      const isOpen = rail.classList.toggle('is-open');
      navButton.setAttribute('aria-expanded', String(isOpen));
    });
    rail.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => {
        rail.classList.remove('is-open');
        navButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

})();
