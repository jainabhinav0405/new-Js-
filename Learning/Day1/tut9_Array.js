// Array is a collection of unorder Dataset

let arr = [1,2,3,"Abhinav",{name:"Abhinav"},false,null,"Big"];
console.log(arr[8]);// if the index value is greater than the array size it will return undefined

// length

console.log(arr.length);

// type object

console.log(typeof arr);

//toString
{
    let x = arr.toString();
    console.log(x);
    console.log(typeof x);
}
// join

{
    let x = arr.join("-");
    console.log(x);
    console.log(typeof x);
}

//pop remove last element 

{
    let x = arr.pop();
    console.log(x);
    console.log(arr);
}


//push add element at last

{
    let x = arr.push("new");
    console.log(x);// return new Array length
    console.log(arr);
}


//Shift remove first element from the array 

{
    let x = arr.shift();
    console.log(x);
    console.log(arr);
}


//unshift add element in the front of the array

{
    let x = arr.unshift(1);
    console.log(x);// return new Array length
    console.log(arr);
}

//delete remove element but doesn't affect the position and length of the array
{
    delete arr[4];
    console.log(arr);
}

//concat
{
    let nums = ["Abhinav",null, "asdf",undefined,0];
    arr1= [1,2,3,4,5,6,7,8,9,10];
    arr2= [11,12,13,14,15,16,17,18,19,20];
    let x = nums.concat(arr1,arr2);
    console.log(x);
    console.log(arr1);
    console.log(arr2);
    console.log(nums);
}


//sort

{
    let arr = [null,undefined,"Abhinav",1,45,4,2,3,8,456,33,56,9];
    arr.sort();
    console.log(arr);
}

//splice
// arr.splice(start,no_deleted_Elements, element added);

{
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let x = arr.splice(3,2,1000,1000002,102,102,10);
    console.log(x);//return deleted elements 
    console.log(arr);
}

//slice

{
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let x = arr.slice(3,7);
    console.log(x);
    console.log(arr);
}


{
    let arr = [
        {fname:"Abhinav",age:12},
        {fname:"ahdjasuq",age:13},
        {fname:"uahsjhd",age:14},
        {fname:"qewuisuja",age:15},
    ];
    let x = arr.reduce((acc,curr)=>{
        if(curr.age<14){
            acc.push(curr.fname);    
        }
        return acc;
    },[])
    console.log(x);
}

