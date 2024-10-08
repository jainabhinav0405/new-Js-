let array = ["red","Blue","green","yellow","pink"];


// Destructuring assignment
// const [a,b] = array;
// console.log(a,b);



// Skip  values
// const [a,,,b] = array;
// console.log(a,b);


//Rest args
// const [a,,b,...arg] = array;
// console.log(a,b,arg);

//default Values
// const[a,b,c,d,e, f="Olive"] = array;
// console.log(a,b,c,d,e,f);


//Array desturcter using object
const {2:color3} = array;
console.log(color3);

let user ={
    name: "Abhinav Jain",
    age : 21,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
}

// const {name , address} = user;
// console.log(name,address);
 
// const {address: {city}} = user ;
// console.log(city);

//default arguments
// const {name ,job="Software Developer"} = user
// console.log(name,job);



//naming convention
// const {name: fullname}= user
// console.log(fullname)