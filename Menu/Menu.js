var menuItems = [
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
  var menu = document.createElement('div');
  var menuNav = document.createElement('ul');
  data.forEach(function(item) {
    var newItem = document.createElement('li');
    newItem.textContent = item;
    menuNav.appendChild(newItem);
  });
  var menuButton = document.querySelector('.menu-button');
  /*Menu structure*/
  menu.classList.add('menu');
  menu.appendChild(menuNav);
  /*Animation controls*/
  var isOpen = false;
  var slideAnim = TweenMax.to(menu, 1, { left: '0' }).reverse();
  var toggleMenu = function() {
    menu.classList.toggle('menu--open');
    slideAnim.reversed(!slideAnim.reversed());
    isOpen = !isOpen;
  };
  /*Event listeners*/
  if (menuButton) {
    menuButton.addEventListener('click', function(event) {
      event.stopPropagation();
      toggleMenu();
    });
  }
  menu.addEventListener('click', function(event) {
    return event.stopPropagation();
  });
  var html = document.querySelector('html');
  if (html) {
    html.addEventListener('click', function() {
      if (isOpen) {
        toggleMenu();
      }
    });
  }
  return menu;
}
var body = document.querySelector('body');
if (body) {
  body.insertBefore(createMenu(menuItems), document.querySelector('.articles'));
}
