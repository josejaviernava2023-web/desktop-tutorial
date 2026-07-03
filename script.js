const header = document.getElementById('header');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

nav.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
