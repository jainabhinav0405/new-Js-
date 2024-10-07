// FUnctions
/**
 *  Functions are a fundamental part of JavaScript, allowing you to encapsulate code that can be reused.
 * 
 */


//Parameters

/*
    Required Parameters
    function greet(name) {
        console.log("Hello, " + name + "!");
    }

    greet("John");  // Output: Hello, John!
    greet();        // Output: Hello, undefined! (no argument passed)

*/

/*
 
    // Default Parameters 
    function greet(name = "Guest") {
        console.log("Hello, " + name + "!");
    }

    greet("John");  // Output: Hello, John!
    greet();        // Output: Hello, Guest! (default value used)


*/


/*
    // Rest Parameters
    function sum(...numbers) {
        let total = 0;
        for (let num of numbers) {
            total += num;
        }
    }
*/

/*

    //Optional Parameters 
    function greet(name, message) {
        if (message === undefined) {
            message = "Hello";  // set default message if none provided
        }
        console.log(message + ", " + name + "!");
    }

    greet("John");              // Output: Hello, John!
    greet("Jane", "Welcome");   // Output: Welcome, Jane!

*/


/*
    //Destructured Parameters
    function displayPerson({ name, age }) {
        console.log(name + " is " + age + " years old.");
    }

    const person = { name: "John", age: 30 };
    displayPerson(person);  // Output: John is 30 years old.
*/

/*
    //Named Parameters
    function createUser({ name, age, city }) {
        console.log("Name: " + name + ", Age: " + age + ", City: " + city);
    }

    createUser({ name: "John", age: 30, city: "New York" });
    // Output: Name: John, Age: 30, City: New York
*/



  
