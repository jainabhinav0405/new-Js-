//A function call a function as a arguments is called a CallBack function.

function calculate(num1,num2, Operator){
    return Operator(num1,num2);
}

const addition= (num1,num2)=>{
    return num1+num2;
}
const subtraction = (num1,num2)=> num1-num2;

const multiplication = function(num1,num2){
    return num1*num2;
}

const division = (num1,num2) => (num1/num2);


console.log(calculate(10,2,addition));
console.log(calculate(10,2,subtraction));
console.log(calculate(10,2,multiplication));
console.log(calculate(10,2,division));
