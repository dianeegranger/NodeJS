/* Diane E. Granger
dianeegranger@gmail.com */

// Coding with Node.js
// JavaScript Concatenation vs Template Literals

const add = 10 + 2;
// Concatenation
console.log("The added value is (" + add + ")");

// Template literals 
console.log(`The added value is (${add})`);

const sub = 10 - 2;
// Concatenation
console.log("The subtracted value is (" + sub + ")");

// Template literal
console.log(`The subtracted value is (${sub})`);

/*
OUTPUT:
PS C:\Users\diane\Desktop\b6 - nodejs 6hr\day2\class> node nodecode.js
The added value is (12)
The added value is (12)
The subtracted value is (8)
The subtracted value is (8)
*/