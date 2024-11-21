const sumNestedArray=function(array){
    let arr = array.flat(Infinity);
    return arr.reduce((acc,curr)=>{
        acc+=curr;
        return acc;
    },0)
}

function sumNested(...number){
    let sum =0;
    number.forEach((element)=>{
        if(Array.isArray(element)){
            sum+=sumNestedArray(element);
        }else{
            sum+=element;
        }
    })
    
    return sum;

}

console.log(sumNested([1,2,[3,4,[5,6]]]));