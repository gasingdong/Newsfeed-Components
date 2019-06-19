const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  // Toggle animation slider
  slideAnim.reversed(!slideAnim.reversed());
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// Animation for menu sliding
let slideAnim = TweenMax.to(menu, 1, { left: '0' }).reverse();
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());
window.addEventListener('load', () =>
  TweenMax.to(menuButton, 1, { left: '25px' })
);
