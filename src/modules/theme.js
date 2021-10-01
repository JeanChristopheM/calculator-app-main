const initialize = () => {
    let locStorageDarkmode = localStorage.getItem('darkmode');
    let input = document.querySelector('#volume');
    let returnMessage = `Theme Module Initialized. `;
    if (!locStorageDarkmode) {
        setTheme(0);
        input.value = 0;
        let add = returnMessage.concat(`First time -> Defaulted to theme 1`);
        return console.log(add);
    } else {
        setTheme(locStorageDarkmode);
        input.value = locStorageDarkmode;
        let add = returnMessage.concat(`LocalStorage found and set to theme ${parseInt(locStorageDarkmode) + 1}`);
        return console.log(add);
    }
}
const setTheme = (theme) => {
    let body = document.querySelector('body');
    body.className="";
    body.classList.add(`theme${parseInt(theme)+1}`);
    return;
}
const setLocalStorage = (theme) => {
    localStorage.setItem('darkmode', theme);
    return console.log(`Set LocalStorage to ${parseInt(theme) + 1}`);
}

export { setTheme, initialize, setLocalStorage };