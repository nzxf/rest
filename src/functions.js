// ELEMENT MAKER
const makeElement = (type, nameClass, parent, text = '') => {
  const element = document.createElement(type);
  element.innerText = text;
  element.classList.add(nameClass);
  parent.appendChild(element);
  return element;
};

// CLEAR ELEMENT CHILDREN
const clear = (element) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
};

// SLIDER (simple animation)
const slide = (greeter, className, time) => {
  greeter.classList.toggle(className);
  setTimeout(function () {
    greeter.classList.toggle(className);
  }, time);
};

// ROOF MAKER
const makeRoof = (howManyTile, parent) => {
  for (let i = 0; i < howManyTile; i++) {
    makeElement('div', `roof-${i}`, parent);
  }
};

// FILL BOARD = RESTO PROFILE
const displayMenuDefault = (array, parent) => {
  makeElement('div', 'resto-name', parent, array.name.toUpperCase());
  makeElement('div', 'resto-time', parent, array.time);
  makeElement('div', 'resto-address', parent, array.address);
  makeElement('div', 'resto-website', parent, array.website);
};

// FILL BOARD = MENU
const fillDisplayMenu = (array, parent) => {
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
    const eachMenu = document.querySelector(`.menus-${i}`);
    slide(eachMenu, `menus-${i}-active`, 100);
  }
};

// CREATE A FOODTRUCK
const makeFoodTruck = (data, parent) => {
  // TOP BOARD
  const boardContainer = makeElement('div', 'board-container', parent);
  const board = makeElement('div', 'board', boardContainer);
  const stickContainer = makeElement('div', 'stick-container', boardContainer);
  const stickBack = makeElement('div', 'stick-back', stickContainer);
  const stickFront = makeElement('div', 'stick-front', stickContainer);
  displayMenuDefault(data, board)
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
  const windowLargeTop = makeElement('div', 'window-top', windowLarge);
  const windowLargeBottom = makeElement('div','window-bottom', windowLarge);
  const chefImage = makeElement('div', 'chef-image', windowLargeBottom);
  const menuCard = makeElement('div', 'menu-card', windowLargeBottom, 'MENU');
  const windowSmall = makeElement('div', 'window-small', truckWindows);
  makeRoof(6, windowLargeTop);
};

// MENU TABS BUTTON
const makeMenuButtons = (array, parent) => {
  let allMenu = ['BURGERS', 'PIZZAS', 'SOUPS', 'DRINKS'];
  for (let i = 0; i < allMenu.length; i++) {
    const element = makeElement('button', 'menu-buttons', parent, allMenu[i]);
    element.addEventListener('click', function () {
      const chefImage = document.querySelector('.chef-image');
      slide(chefImage, 'chef-image-active', 750);
      const board = document.querySelector('.board');
      clear(board);
      fillDisplayMenu(array[allMenu[i].toLowerCase()], board);
    });
  }
};

export { makeFoodTruck, displayMenuDefault, makeMenuButtons };
