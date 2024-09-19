//try...catch block
/*
In JavaScript, the try...catch block is used to handle errors that occur during the execution of code. It allows you to "try" a block of code and "catch" any errors that might be thrown during the execution, preventing the program from crashing and allowing you to handle the error gracefully.
*/

//Basic Syntax
/*
try{
code that might throw an error
}
catch(error){
code to handle the error
}
*/

/*
try block: This is where you place the code that you want to test for errors. If the code executes without errors, the catch block is skipped.
catch block: This block is executed if an error occurs in the try block. The catch block takes one argument, typically named error or e, which is an object containing information about the error.
*/

try{
    let result = func(); //Function is declared but not defined
        console.log("Function is executed without error");
    } 

catch(error){
    console.log("An error occurred:", error.message);
} //As function is not not declared it will run catch block which will logging error message 


//JSON:- JavaScript Object Notation
//JSON is vital for data exchange, configuration, and storage, enabling smooth communication between the client and server and persistent user experience.
let person = '{  "name":"Harshal", "age":27, "proffession":"Engineer", "gender":"male" }';//Defining JSON 
let user = JSON.parse(person);//Converting JSON into object data type
console.log(typeof(user));

let jsonString = JSON.stringify(user);//Converting Object data type into string
console.log(jsonString);
console.log(typeof(jsonString));


