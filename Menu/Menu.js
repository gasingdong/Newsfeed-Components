let menuOpen = false;
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  // Toggle animation slider
  slideAnim.reversed(!slideAnim.reversed());
  menuOpen = !menuOpen;
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// Animation for menu sliding
let slideAnim = TweenMax.to(menu, 1, { left: '0' }).reverse();
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', event => {
  event.stopPropagation();
  toggleMenu();
});

// Animation for menu button sliding in on load
window.addEventListener('load', () =>
  TweenMax.to(menuButton, 1, { left: '25px' })
);

// Handle sliding menu back in if the menu is open and the user clicks something else
document.querySelector('html').addEventListener('click', () => {
  if (menuOpen) {
    toggleMenu();
  }
});
menu.addEventListener('click', event => event.stopPropagation());
