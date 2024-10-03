const priority = (operator) => {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
}
const evalution = (expression) => {
    const symbols = [];
    const number = [];
    let num = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(char)) {
            num += char;
        } 
        else if (char === '(') {
            symbols.push(char);
        }
         else if (char === ')') {
            if (num !== '') {
                number.push(num);
                num = '';
            }
            while (symbols.length && symbols[symbols.length - 1] !== '(') {
                const operator = symbols.pop();
                const operations2 = number.pop();
                const operations1 = number.pop();
                number.push(calculations(operations1, operations2, operator));
            }
            symbols.pop(); 
        }
        else if (char==='+' || char==='-' || char==='*' || char==='/') {
            if (num !== '') {
                number.push(num);
                num = '';
            }

            while (symbols.length && priority(symbols[symbols.length - 1]) >= priority(char)) {
                const operator = symbols.pop();
                const operations2 = number.pop();
                const operations1 = number.pop();
                number.push(calculations(operations1, operations2, operator));
            }

            symbols.push(char);
        }
    }

    if (num !== '') {
        number.push(num);
    }

    while (symbols.length) {
        const operator = symbols.pop();
        const operations2 = number.pop();
        const operations1 = number.pop();
        number.push(calculations(operations1, operations2, operator));
    }

    return number.pop();
};

const calculations = (operations1, operations2, operator) => {
    const num1 = parseFloat(operations1);
    const num2 = parseFloat(operations2);
    if(operator=="+"){
        return num1+num2;
    }
    if(operator=="-"){
        return num1-num2;
    }
    if(operator=="*"){
        return num1*num2;
    }
    if(operator=="/"){
        return num1/num2;
    }
}

const areaRectangle  = (length, breath)=>{
    return length*breath;
}

const perimeter = (length, breath)=>{
    return 2*(length+breath);
}

const circumference = (radius)=>{
    return 2*Math.PI*radius;
}
const areaCircle  = (radius)=>{
    return Math.PI*radius**2;
}

const volume = (length, breath, height)=>{
    return length*breath*height;
}

const volumeCube = (sideLength)=>{
    return sideLength**3;
}

const tempConvertorCelcius = (celcius)=>{
    return celcius*1.8+32;
}
const tempConvertorFahrenheit = (fahrenheit)=>{
    return (fahrenheit-32)*5/9;
}


const expression = '1+(2+3)*4-10/2';
const result = evalution(expression);
console.log(result);
