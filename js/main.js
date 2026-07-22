document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('details').forEach(detail => {
    const summary = detail.querySelector('summary');
    if (!summary) return;
    const closed = summary.textContent.replace(/^Hide /, 'Show ');
    const open = closed.replace(/^Show /, 'Hide ');
    const label = () => { summary.textContent = detail.open ? open : closed; };
    detail.addEventListener('toggle', label);
    label();
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
