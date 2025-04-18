// to check if a string is a palindrome or not
let str = "racecar";
const isPalindrome = (str) => {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
    }   
console.log(isPalindrome(str)); // true
// to check if a number is a palindrome or not
let num = 121;
const isPalindromeNum = (num) => {
    let reversedNum = num.toString().split("").reverse().join("");
    return num == reversedNum;
}
console.log(isPalindromeNum(num)); // true
// to check if a string is a palindrome or not
let str2 = "hello";
const isPalindrome2 = (str2) => {
    let reversedStr = str2.split("").reverse().join("");
    return str2 === reversedStr;
}
console.log(isPalindrome2(str2)); // false
// to check if a number is a palindrome or not
let num2 = 123;

const isPalindromeNum2 = (num2) => {
    let reversedNum = num2.toString().split("").reverse().join("");
    return num2 == reversedNum;
}
console.log(isPalindromeNum2(num2)); // false
// to check if a string is a palindrome or not

