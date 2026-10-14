(() => {
  const shell = document.querySelector('[data-gallery-shell]');
  if (!shell) return;

  const grid = shell.querySelector('[data-gallery-grid]');
  const cards = [...shell.querySelectorAll('[data-gallery-entry]')];
  const range = shell.querySelector('[data-time-range-input]');
  const selection = shell.querySelector('[data-time-selection]');

  const select = (index, scroll = true) => {
    const card = cards[index];
    if (!card) return;
    cards.forEach((item, cardIndex) => item.setAttribute('aria-current', cardIndex === index ? 'true' : 'false'));
    if (selection) selection.textContent = card.dataset.galleryDate || 'Undated';
    if (scroll) card.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
  };

  shell.querySelectorAll('[data-gallery-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const amount = Math.max(240, Math.round((grid?.clientWidth || 360) * .72));
      grid?.scrollBy({left: button.dataset.galleryScroll === 'previous' ? -amount : amount, behavior: 'smooth'});
    });
  });

  if (range) {
    range.max = String(Math.max(cards.length - 1, 0));
    range.addEventListener('input', () => select(Number(range.value)));
    cards.forEach((card, index) => card.addEventListener('click', () => {
      range.value = String(index);
      select(index, false);
    }));
  }
  select(0, false);
})();
