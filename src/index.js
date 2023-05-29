import './style.css';
import data from './data.json';
import { makeFoodTruck, makeMenuButtons } from './functions';

// MAKE TRUCKFOOD AND SIGNBOARD
makeFoodTruck(data, document.querySelector('#content'))

// MAKE MENU TAB BUTTONS
makeMenuButtons(data, document.querySelector('.menu-card'));
