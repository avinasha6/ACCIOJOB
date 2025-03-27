// a = 10
// b = 20
// sum = a + b
// console.log(sum)

// datatypes in Javascript

// a = 10 // Integer => number
// b = 10.5 // decimal => number
// c = "ramesh" // string
// d = true // boolean

// console.log(a, typeof(a))
// console.log(b, typeof(b))
// console.log(c, typeof(c))
// console.log(d, typeof(d))

// a = 10
// b = 200
// sum = a+b

// console.log("Sum is", sum)

// console.log("Sum of",a,"and",b,"is",sum);
// console.log(`Sum of ${a} and ${b} is ${sum}`)

// console.log("==== Recursion topics =====")

// let n4 = 4;
// function sum(n4) {
//     if (n4 <= 1) {
//         return 1;
//     }
//     return n4 + sum(n4 - 1);
// }
// console.log(sum(n4));

// function sum(n) {
//     if (n == 0){
//         return 0;
//     }
//     return n + sum(n-1);
// }

// console.log("==== Fibonacci Series =====")

// let n = 6;
// function fibonacci(n){
//     if (n == 0){
//         return 0;
//     } else if(n == 1){
//         return 1
//     }
//    return fibonacci(n-1)+fibonacci(n-2);
// }
// fibonacci(n);
// console.log(fibonacci(n));

// console.log("=== Recursion Questions ====");

// function reverseArray(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let lastElement = arr.pop();
//   return [lastElement].concat(reverseArray(arr));
// }

// const originalArray = [10, 20, 30, 40, 50, 60, 70];
// const reversedArray = reverseArray(originalArray);

// console.log(reversedArray);

// console.log("=== Reverse a string using Recursion===")

// function rev(str){
//     if (str.length === 0){
//         return "";
//     }
//     return rev(str.slice(1)) + str[0];
// }
// console.log(rev("abc"));


// console.log("==== Remove to duplicate array ====")

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }


// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); 


// Remove Duplicates
// [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];

console.log("==== Check if an array is sorted ====")

