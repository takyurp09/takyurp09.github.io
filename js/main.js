document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const menu = document.getElementById('menu');
  const links = [...document.querySelectorAll('.nav-list a[href^="#"]')];
  const sections = [...document.querySelectorAll('main section[id]')];

  const closeMenu = () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  };

  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });

  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });

  const activateLink = () => {
    let current = 'home';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 110) current = section.id;
    });
    links.forEach(link => link.classList.toggle('active', link.hash === '#' + current));
  };

  window.addEventListener('scroll', activateLink, { passive: true });
  activateLink();
  document.getElementById('year').textContent = new Date().getFullYear();
});
