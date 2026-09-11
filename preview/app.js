const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');
const filters = document.querySelectorAll('[data-filter]');
const products = document.querySelectorAll('[data-category]');
const addButtons = document.querySelectorAll('[data-product]');
const cartCount = document.querySelector('[data-cart-count]');
const toast = document.querySelector('.toast');
let count = 0;
let toastTimer;

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    products.forEach((product) => {
      product.hidden = button.dataset.filter !== 'all' && product.dataset.category !== button.dataset.filter;
    });
  });
});

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = String(count);
    toast.textContent = `${button.dataset.product} added to the demo bag.`;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  });
});
