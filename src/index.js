import './style.css';
// import data from './data.json';

// Element Maker
const makeElement = (type, nameClass, parent, text = "") => {
  const element = document.createElement(type);
  element.innerText = text;
  element.classList.add(nameClass);
  parent.appendChild(element);
  return element;
};

const content = document.querySelector('#content');

// BOARD
const boardContainer = makeElement('div', 'board-container', content);
const board = makeElement('div', 'board', boardContainer, "THIS IS A SIGNBOARD!!!")
const stickContainer = makeElement('div', 'stick-container', boardContainer)
const stickBack = makeElement('div', 'stick-back', stickContainer)
const stickFront = makeElement('div', 'stick-front', stickContainer)

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
const foodsButton = makeElement('button', 'foods-button', menu, "Foods")
const drinksButton = makeElement('button', 'drinks-button', menu, "Drinks")
