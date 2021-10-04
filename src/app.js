import * as themeModule from './modules/theme.js';
let input = document.querySelector('#volume');
themeModule.initialize();
input.addEventListener('change', (e) => {
    themeModule.setTheme(e.target.value);
    themeModule.setLocalStorage(e.target.value);
});

import * as calcModule from './modules/calc.js';
calcModule.initialize();
let keypad = document.querySelector('.main__keypad');
keypad.addEventListener('click', (e)=> {
    if (e.target.nodeName === "BUTTON") {
        if (e.target.classList.contains('num')) calcModule.keyPressed(parseInt(e.target.textContent));
        else calcModule.keyPressed(e.target.textContent);
    }
});