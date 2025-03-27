// let name;

// name = "Avinash Raj";

// let age = 22;
// let height = 6.0;

// console.log(`My name is ${name} and age is ${age}`);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof height);

// let firstName = "Avinash";
// let lastName = "Raj";

// console.log(firstName * lastName);

// let firstNum = "3";
// let secNum = "4";

// console.log(firstNum * secNum);

//typecasting

// let userInput = "23";

// console.log(Number(userInput));


// let userInput = "abb";
// if(userInput == NaN)
// {
//     console.log("userInput is valid");
// }else{
//     console.log("userInput is invalid");
// }

// let userInput = "24";
// if (isNaN(Number(userInput))) {
//     console.log("This is not a valid number");
// } else {
//     console.log("This is a valid number");
// }


let collegeName = "VIT";
console.log("collegeName 1st: ", collegeName);

function logging() {
    collegeName = "V.I.T University";
    let state = "Tamil Nadu";
    console.log("Log: some data: ", collegeName, state);
}

logging();

console.log("collegeName 3rd: ", collegeName, state);



// let and var 

console.log(a);
// let a = "abc";
var a = "abc";


if(2 === 2) {
    var a = "Tamil Nadu";
    console.log("===", a);
}

console.log("collegeName 3rd: ", collegeName, a);


// Feature             var                                 let
// Scope               Function - scoped                   Block-scoped
// Hoisting            oisted, intialized to undefined     Hoisted, not intialized
// Redeclaration       Allowed                             Not Allowed
// Global object prop  yes                                 No  


function scoppv2() {
    if (2 == 2) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
scoppv2();