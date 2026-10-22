(() => {
  'use strict';
  const button = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-navigation');
  if (button && nav) {
    const close = () => {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
    };
    button.addEventListener('click', () => {
      const next = button.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', next);
      button.setAttribute('aria-expanded', String(next));
      button.setAttribute('aria-label', next ? 'Close navigation' : 'Open navigation');
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }

  // A hidden, repeatable easter egg: five activations of the lower cloud.
  const kissTrigger = document.getElementById('bear-kiss-trigger');
  const kissVisual = kissTrigger?.closest('.hero-visual');
  const kissStatus = document.getElementById('bear-kiss-status');
  if (kissTrigger && kissVisual) {
    let clicks = 0;
    let revealing = false;
    kissTrigger.addEventListener('click', () => {
      if (revealing) return;
      clicks += 1;
      if (clicks < 5) return;
      clicks = 0;
      revealing = true;
      kissVisual.classList.add('is-kissing');
      if (kissStatus) kissStatus.textContent = 'Surprise! Two little bears are kissing.';
      window.setTimeout(() => {
        kissVisual.classList.remove('is-kissing');
        if (kissStatus) kissStatus.textContent = '';
        revealing = false;
      }, 5000);
    });
  }
  document.querySelectorAll('#copyright-year').forEach(el => { el.textContent = String(new Date().getFullYear()); });
})();