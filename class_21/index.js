console.log("Question 1: Reverse words of a string");
let description = "Hello World THis is me";
// output: me is THis World Hello


console.log("Question 3: Find the most frequent word in a paragraph");
description = "apple banana apple orange banana apple"

const description1 = "apple banana apple orange banana apple";
console.log(description1.trim().split(" ").length);
// apple


const test = "Hello World, This is my codebase ";
console.log(test.trim().split(" ").length);

console.log("Question 4: Implement Run-length Encoding");
description = "aaabbcddd";
// a3b2c1d3



// Codes

function runLengthEncoding(str) {
    let encoded = '';
    let count = 1;
  
    
    for (let i = 1; i <= str.length; i++) {
      
      if (str[i] === str[i - 1]) {
        count++;
      } else {
       
        encoded += str[i - 1] + count;
        count = 1; 
    }
    }
  
    return encoded;
  }
  
  
  const input = "aaabbcddd";
  const result = runLengthEncoding(input);
  console.log(result);