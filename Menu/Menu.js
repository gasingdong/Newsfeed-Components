/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(data) {
  const menu = document.createElement('div');
  const menuNav = document.createElement('ul');
  const menuData = data.forEach(item => {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    menuNav.appendChild(newItem);
    return newItem;
  });
  const menuButton = document.querySelector('.menu-button');

  menu.classList.add('menu');

  menu.appendChild(menuNav);

  let isOpen = false;
  let slideAnim = TweenMax.to(menu, 1, { left: '0' }).reverse();
  const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    slideAnim.reversed(!slideAnim.reversed());
    isOpen = !isOpen;
  }
  menuButton.addEventListener('click', event => {
    event.stopPropagation();
    toggleMenu();
  });
  return menu;
}

document.querySelector('body').insertBefore(createMenu(menuItems), document.querySelector('.articles'));
