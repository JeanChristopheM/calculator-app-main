let firstInstruction;
let secondInstruction;
let operator;

const initialize = () => {
    let screen = document.querySelector('.main__screen');
    return screen.textContent= '0';
}

const keyPressed = (keyInput) => {
    let screen = document.querySelector('.main__screen');
    let currentValue = screen.textContent;
    let newValue;
    if (typeof keyInput == "number") {
        if (currentValue === '0') {
            newValue = keyInput;
        } else newValue = currentValue.concat(keyInput.toString());
    } else {
        switch (keyInput) {
            case "DEL":
                newValue = currentValue.slice(0,-1);
                break;
            case "RESET":
                newValue = 0;
                break;
            case "=":
                newValue = makeMath(parseFloat(firstInstruction), parseFloat(currentValue), operator);
                break;
            case ".":
                if (!currentValue.includes('.')) newValue = currentValue.concat(keyInput.toString());
                break;
            default:
                firstInstruction = currentValue;
                operator = keyInput;
                newValue = 0;
        }
    }
    return refreshScreen(newValue);
}

const makeMath = (origin, value, operator) => {
    let result;
    switch (operator) {
        case "+": 
            result = origin + value;
            break;
        case "-":
            result = origin - value;
            break;
        case "/":
            result = origin / value;
            break;
        case "x":
            result = origin * value;
    }
    return result;
}

const refreshScreen = (value) => {
    let screen = document.querySelector('.main__screen');
    
    if (newValue === "") newValue = 0;
    return screen.textContent = newValue;
}
export { initialize, refreshScreen, keyPressed};