// var and function is store in the call stack during complication

console.log(x);
// var x = 5;

console.log(arr);
//this will return function as it store in the call stack

function arr(num2,num1){
    return num1+num2;
}

// this will store undefined in the call stack and same with the arrow functions 
var meth1 = function(){
    return 5;
}
