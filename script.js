let currentEquation = document.getElementById("botText");
let pastEquation = document.getElementById("topText");
let decimalBool = false;

const pressNumber = num => {
    if (num == '.') {
        if (decimalBool) {
            return;
        } else {
            currentEquation.textContent += num;
            decimalBool = true;
        }
    } else {
        if(currentEquation.textContent == '0') {
            currentEquation.textContent = num;
            } else {
            currentEquation.textContent += num;
        }
    }
}

const clearText = () => {
    console.log('clear');
    currentEquation.textContent = '0';
    pastEquation.textContent = '';
    decimalBool = false;
}

const del = () => {
    if (currentEquation.textContent.length == 1) {
        currentEquation.textContent = '0';
    } else { 
        if (currentEquation.textContent[currentEquation.textContent.length - 1] == '.') {
            decimalBool = false;
        }
        currentEquation.textContent = currentEquation.textContent.slice(0, -1);
    }
}

const operatorBut = operator => {
    currentEquation.textContent += ` ${operator} `
    decimalBool = false;
}

const equalBut = () => {
    pastEquation.textContent = currentEquation.textContent;
    currentEquation.textContent = eval(currentEquation.textContent).toString();
    if (currentEquation.textContent.indexOf('.') == -1) {
        decimalBool = false
    } else {
        decimalBool = true;
    }
}

document.addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 8:
            del();    
            break;
        case 67:
            clearText();
            break;
        case 48:
            pressNumber('0');
            break;
        case 49:
            pressNumber('1');
            break;
        case 50:
            pressNumber('2');
            break;
        case 51:
            pressNumber('3');
            break;
        case 52:
            pressNumber('4');
            break;
        case 53:
            pressNumber('5');
            break;
        case 54:
            pressNumber('6');
            break;
        case 55:
            pressNumber('7');
            break;
        case 56:
            pressNumber('8');
            break;
        case 57:
            pressNumber('9');
            break;
        case 190:
            pressNumber('.');
            break;
        case 187:
            operatorBut('+');
            break;
        case 189:
            operatorBut('-');
            break;
        case 56:
            operatorBut('*');
            break;
        case 191:
            operatorBut('/');
            break;
        case 187:
            equalBut();
            break;
        case 13:
            equalBut();
        default:
            break;
    }
})