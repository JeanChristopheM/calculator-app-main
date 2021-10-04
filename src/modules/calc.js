let firstInstruction;
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
                firstInstruction = null;
                operator = null;
                newValue = 0;
                break;
            case "=":
                if (firstInstruction) {
                    if (firstInstruction == 0 && currentValue == 0) newValue = "0";
                    else newValue = makeMath(parseFloat(firstInstruction), parseFloat(currentValue), operator);
                }
                else newValue = currentValue;
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
    return result.toFixed(2);
}

const refreshScreen = (value) => {
    let screen = document.querySelector('.main__screen');
    
    if (value === "") value = 0;
    return screen.textContent = value;
}

export { initialize, keyPressed};