const addition = (a,b)=>{
    return a+b;
}
const subtraction = (a,b)=>{
    return a-b;
}
const multiplication = (a,b)=>{
    return a*b;
}
const division = (a,b)=>{
    if(b==0){
        return "Number can't divisble by 0";
    }
    return a/b;
}
const modulos = (a,b)=>{
    return a%b;
}



{
    const object1 = {};

Object.defineProperties(object1, {
  property1: {
    name: "ABhinav",
    value: "j",
  },
  property2: {},
});

console.log(object1.property1.name);
// Expected output: 42

}