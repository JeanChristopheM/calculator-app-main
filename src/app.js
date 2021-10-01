import { theme } from './modules/theme.js';

let body = document.querySelector('body');
let themeSwitch = document.querySelector('.themeSwitch');

themeSwitch.addEventListener('click', (e) => {
    let themeIndex = parseInt(body.classList[0].slice(5));
    body.className="";
    if (themeIndex == 3) themeIndex = 1;
    else themeIndex++;
    body.classList.add(`theme${themeIndex}`);
})
