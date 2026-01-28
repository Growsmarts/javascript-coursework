// Step 1
let x = 10;
let y = 5;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);

// Challenge: divide by zero
console.log("x / 0 =", x / 0); 
// JavaScript shows Infinity when dividing by zero

// Step 2
let isEnrolled = true;
let hasCompletedAssignment = false;

console.log("isEnrolled AND hasCompletedAssignment =", isEnrolled && hasCompletedAssignment);
console.log("isEnrolled OR hasCompletedAssignment =", isEnrolled || hasCompletedAssignment);
console.log("NOT isEnrolled =", !isEnrolled);

/* Step 3
| A     | B     | A && B | A || B |
|-------|-------|--------|--------|
| true  | true  | true   | true   |
| true  | false | false  | true   |
| false | true  | false  | true   |
| false | false | false  | false  |
*/
