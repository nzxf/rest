import './style.css';
import data from './data.json';
import { makeFoodTruck, makeMenuButtons, makeHomeButton } from './functions';

// TRUCKFOOD AND SIGNBOARD
makeFoodTruck(data, document.querySelector('#content'));

// MENU TAB BUTTONS
makeMenuButtons(data, document.querySelector('.menu-card'));

// HOME BUTTON
makeHomeButton(data, document.querySelector('.window-small'))
