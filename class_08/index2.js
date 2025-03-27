// Arithmetic Operator

// Addition

console.log("===Addition===")
console.log(5 + 4);
console.log("5" + 1);
console.log(5 + "1");

// Subtraction

console.log("===Subtraction===")
console.log(10 - 4);
console.log(4 - 10);
console.log(10 - "4");
console.log("==>", "10" - "4");

// Multiplication

console.log("===Multiplication===")
console.log(10 * 5);

// Division

console.log("===Division===")
console.log(5 / 3);
console.log(22 / 7);

// Modulus(Remainder)

console.log("===Modulus===")
console.log(5 % 3);
console.log(2 % 3);

// Exponentiation

console.log("===Exponentiation===")
console.log(5 ** 3);
console.log(5 ** 2);

console.log("=== Expression ===")
console.log(5 + 1 * 3);

// Comparison Operator
// == Equal to
console.log(5 == "5");

// === Strict equal to
console.log(5 === "5");

// != Not equal to
console.log(5 != "5");
console.log(5 != 3);

// !== Strict Not equal to
console.log(5 !== "5");
console.log(5 !== 5);

// > Greater than
console.log("=== Greater than ===");
console.log(5 > 3);
console.log(3 > "5");

// < Less than
console.log("=== Less than ===");
console.log(5 < 3);

// >= Great than or equal to
console.log(">= Great than or equal to ===");
console.log(5 >= 3);
console.log(5 >= 5);

// <= Less than or equal to
console.log("<= Less than or equal to ===");
console.log(5 < 3);

// Conditional Operator or Ternary Operator
// condition ? True case : False case

if (5 >= 3) {
    // True
  } else {
    // False
  }
  
  const res = 5 >= 3 ? "This is true" : "This is false";
  console.log(res);
  
// Assignment Operators
console.log("===Assignment Operators====");

// = Assign
let x = 5;
console.log(x);

// += Add and Assign
x += 10; // ---> x = x + 10
console.log(x); // 15

// -=
x -= 10; // ---> x = x - 10
console.log(x); // 5

// *=
x *= 10; // ---> x = x * 10
console.log(x); // 50

// /=
x /= 10; // ---> x = x / 10
console.log(x); // 5

// %=
x  %= 10; // ---> x = x % 10
console.log(x); // 5

// **=
