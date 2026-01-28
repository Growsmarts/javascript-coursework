// My variables
let age = 25;           // Number
let name = "Jacob Madaras";  // String
let isEnrolled = true;  // Boolean
let completedCourse = null; // Null (not finished)

// 1. Number to String
let ageStr = String(age);
console.log("Age:", age, "Type:", typeof age, "→ Converted:", ageStr, "Type:", typeof ageStr);

// 2. String to Boolean
let nameBool = Boolean(name);
console.log("Name:", name, "Type:", typeof name, "→ Converted:", nameBool, "Type:", typeof nameBool);

// 3. Boolean to Number
let enrolledNum = Number(isEnrolled);
console.log("Enrolled:", isEnrolled, "Type:", typeof isEnrolled, "→ Converted:", enrolledNum, "Type:", typeof enrolledNum);

// 4. Null to Number
let completedNum = Number(completedCourse);
console.log("Completed Course:", completedCourse, "Type:", typeof completedCourse, "→ Converted:", completedNum, "Type:", typeof completedNum);

// What I learned:
// Null becomes 0 when its changes to a number.
// Null means nothing there on purpose.