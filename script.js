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
  document.querySelectorAll('#copyright-year').forEach(el => { el.textContent = String(new Date().getFullYear()); });
})();