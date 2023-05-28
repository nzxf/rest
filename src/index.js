import './style.css';
// import data from './data.json';

// Element Maker
const makeElement = (type, nameClass, parent) => {
  const element = document.createElement(type);
  element.classList.add(nameClass);
  parent.appendChild(element);
  return element;
};

const content = document.querySelector('#content');

makeElement('div', 'menu-container', content);

const truckContainer = makeElement('div', 'truck-container', content);
const truckBody = makeElement('div', 'truck-body', truckContainer);
const truckFront = makeElement('div', 'truck-front', truckContainer);
const truckLamp = makeElement('div', 'truck-lamp', truckFront);
const truckChassis = makeElement('div', 'truck-chassis', truckContainer);
const truckTireBack = makeElement('div', 'truck-tire-back', truckContainer);
const truckTireFront = makeElement('div', 'truck-tire-front', truckContainer);
const truckWindows = makeElement('div', 'truck-windows', truckBody);
const windowLarge = makeElement('div', 'window-large', truckWindows);
// windowLarge.innerText = "Opening soon"
const menu = makeElement('div', 'menu', windowLarge);
menu.inner
const windowSmall = makeElement('div', 'window-small', truckWindows);
