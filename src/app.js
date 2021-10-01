import * as themeModule from './modules/theme.js';
let input = document.querySelector('#volume');
themeModule.initialize();
input.addEventListener('change', (e) => {
    themeModule.setTheme(e.target.value);
    themeModule.setLocalStorage(e.target.value);
});
