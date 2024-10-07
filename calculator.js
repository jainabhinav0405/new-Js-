//Set the priority of the elements
const priority = (operator) => {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
}

function isValidExpression(expression) {
    let stack =[];
    for(let i=0;i<expression.length;i++){
        if(expression[i]==='('){
            stack.push(i);
            if(i===expression.length-1){
                return false;
            }
            else if(expression[i+1]==="+" || expression[i+1]==="*" || expression[i+1]==="/"){
                return false;
            }
            
        }
        else if(expression[i]===')'){
            stack.pop();
            if(i===0){
                return false;
            }
            else if(expression[i-1]==="+" || expression[i-1]==="-" || expression[i-1]==="*" || expression[i-1]==="/"){
                return false;
            }
        }
        else if(expression[i]==="+" || expression[i]==="-" || expression[i]==="*" || expression[i]==="/"){
            if(i==0 || i==expression.length-1){
                return false;
            }
            else if(expression[i-1]==="+" || expression[i-1]==="-" || expression[i-1]==="*" || expression[i-1]==="/"){
                return false;
            }
            else if(expression[i+1]==="+" || expression[i+1]==="-" || expression[i+1]==="*" || expression[i+1]==="/"){
                return false;
            }

        }

    }
    return true;
}

//Solve Expression
const evalution = (expression) => {
    if(!isValidExpression(expression)){
        return ("Invalid Expression");

    }


    //Store symbols
    const symbols = [];
    //store numbers
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
            //pop ( from the symbols stack
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

// required 
const expression = '1+(2+3 )*4-10/2';
const result = evalution(expression);
console.log(result);


{
    const obj = {};
const proto = Object.getPrototypeOf(obj);

console.log(proto );  // Output: true

}