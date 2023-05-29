import './style.css';
import data from './data.json';

// Element Maker
const makeElement = (type, nameClass, parent, text = '') => {
  const element = document.createElement(type);
  element.innerText = text;
  element.classList.add(nameClass);
  parent.appendChild(element);
  return element;
};

// Clear Element Children
const clear = (element) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
};

// JUMPER
const jumpIn = (greeter, className, time) => {
  greeter.classList.toggle(className);
  setTimeout(function () {
    greeter.classList.toggle(className);
  }, time);
};

// TILES
const makeRoof = (howmany, parent) => {
  for (let i = 0; i < howmany; i++) {
    makeElement('div', `roof-${i}`, parent);
  }
};

// MENU DISPLAY
const displayMenu = (array, parent) => {
  const menuContainer = makeElement('div', 'menu-container', parent);
  for (let i = 0; i < array.length; i++) {
    // MENU DATA
    const menus = makeElement('div', 'menus', menuContainer);
    menus.classList.add(`menus-${i}`);
    const menuImage = makeElement('div', 'menu-image', menus);
    menuImage.style.backgroundImage = `url(${array[i].image})`;
    makeElement('div', 'menu-name', menus, array[i].name);
    makeElement('div', 'menu-price', menus, `$${array[i].price}`);
    makeElement('div', 'menu-description', menus, array[i].description);
    // MENU TRANSITION
    const element = document.querySelector(`.menus-${i}`);
    jumpIn(element, `menus-${i}-active`, 100);
  }
};

const content = document.querySelector('#content');
// BOARD
const boardContainer = makeElement('div', 'board-container', content);
const board = makeElement('div', 'board', boardContainer);
const displayDefault = (array) => {
  makeElement('div', 'resto-name', board, array.name.toUpperCase());
  makeElement('div', 'resto-time', board, array.time);
  makeElement('div', 'resto-address', board, array.address);
  // makeElement('div', 'resto-phone', board, array.phone);
  makeElement('div', 'resto-website', board, array.website);
};
displayDefault(data);
const stickContainer = makeElement('div', 'stick-container', boardContainer);
const stickBack = makeElement('div', 'stick-back', stickContainer);
const stickFront = makeElement('div', 'stick-front', stickContainer);

// TRUCK PARTS
const truckContainer = makeElement('div', 'truck-container', content);
const truckBody = makeElement('div', 'truck-body', truckContainer);
const truckFront = makeElement('div', 'truck-front', truckContainer);
const truckLamp = makeElement('div', 'truck-lamp', truckFront);
const truckChassis = makeElement('div', 'truck-chassis', truckContainer);
const truckTireBack = makeElement('div', 'truck-tire-back', truckContainer);
const truckTireFront = makeElement('div', 'truck-tire-front', truckContainer);
const truckWindows = makeElement('div', 'truck-windows', truckBody);
const windowLarge = makeElement('div', 'window-large', truckWindows);
const windowLargeTop = makeElement('div', 'window-large-top', windowLarge);
makeRoof(6, windowLargeTop);
const windowLargeBottom = makeElement(
  'div',
  'window-large-bottom',
  windowLarge
);
const chefImage = makeElement('div', 'chef-image', windowLargeBottom);
const windowSmall = makeElement('div', 'window-small', truckWindows);

// MENU TABS BUTTON
const menu = makeElement('div', 'menu', windowLargeBottom, 'MENU');
const makeMenuButtons = (array, parent) => {
  let allMenu = ['burgers', 'pizzas', 'soups', 'drinks'];
  for (let i = 0; i < allMenu.length; i++) {
    const element = makeElement(
      'button',
      'menu-buttons',
      parent,
      allMenu[i].toUpperCase()
    );
    element.addEventListener('click', function () {
      jumpIn(chefImage, 'chef-image-active', 750);
      clear(board);
      displayMenu(array[allMenu[i]], board);
      // element.disabled = true;
    });
  }
};
makeMenuButtons(data, menu);
