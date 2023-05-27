import './style.css';
// import data from './data.json';

const content = document.querySelector('#content');

const leftContent = document.createElement('div');
leftContent.classList.add('left-content');
content.appendChild(leftContent);

// MID
const midContent = document.createElement('div');
midContent.classList.add('mid-content');
content.appendChild(midContent);

const center = document.createElement('div');
center.classList.add('center');
midContent.appendChild(center);

const coverButton = document.createElement('button');
coverButton.classList.add('cover-button')
coverButton.innerText = 'NANDEMO\nRESTO';
center.appendChild(coverButton);
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button')
menuButton.innerText = 'MENU';
center.appendChild(menuButton);

const rightContent = document.createElement('div');
rightContent.classList.add('right-content');
content.appendChild(rightContent);
