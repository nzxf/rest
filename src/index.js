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
const clear = element => {
  while (element.hasChildNodes()){
    element.removeChild(element.firstChild)
  }
}

// Display Menu
const displayMenu = (title, array, parent) => {
  const menuTitle = makeElement('div', 'menu-title', parent);
  menuTitle.innerText = title.toUpperCase()
  const menuContainer = makeElement('div', 'menu-container', parent)
  for (let i = 0; i < array.length; i++) {
    const menus = makeElement('div', `menus`, menuContainer);
    makeElement('div', 'menu-name', menus, array[i].name)
    makeElement('div', 'menu-description', menus, array[i].description)
    makeElement('div', 'menu-price', menus, `$${array[i].price}`)
  }
};

const content = document.querySelector('#content');
// BOARD
const boardContainer = makeElement('div', 'board-container', content);
const board = makeElement('div','board', boardContainer,`${data.name}\n${data.time}`);
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
const windowSmall = makeElement('div', 'window-small', truckWindows);

// MENU
const menu = makeElement('div', 'menu', windowLarge, 'Menu');

const makeMenuButtons = (array, parent) => {
  let allMenu = ["burgers", "pizzas", "fries", "drinks"]
  for (let i = 0; i < allMenu.length; i++) {
    const element = makeElement('button', 'menu-buttons', parent, allMenu[i].toUpperCase())
    element.addEventListener('click', function() {
      clear(board)
      displayMenu(allMenu[i], array[allMenu[i]], board)
    })
  }
}

makeMenuButtons(data, menu)