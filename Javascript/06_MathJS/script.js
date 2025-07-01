// const width1 = +prompt("Please Enter Rectangle Width");
// const height1 = +prompt("Please Enter Rectangle Height");

// console.log(width1 * height1);
// document.write(`Rectangle Area: ${width1 * height1}`);

// 1. Calculate Square Area

// const side = +prompt("Enter the side of the square:");
// console.log(side * side);
// document.write(`Square Area: ${side * side}`);

// 2. Find Circle Circumference

// const radius = +prompt("Enter the radius of the circle:");
// const circumference = 2 * Math.PI * radius;
// console.log(circumference.toFixed(2));
// document.write(`Circumference: ${circumference.toFixed(2)}`);

// 3. Convert Celsius to Fahrenheit

// const celsius = +prompt("Enter temperature in Celsius:");
// const fahrenheit = (celsius * 9) / 5 + 32;
// console.log(fahrenheit);
// document.write(`Temperature in Fahrenheit: ${fahrenheit}`);

// 4. Calculate Simple Interest

// const principal = +prompt("Enter principal amount:");
// const rate = +prompt("Enter rate of interest:");
// const time = +prompt("Enter time in years:");
// const simpleInterest = (principal * rate * time) / 100;
// console.log(simpleInterest);
// document.write(`Simple Interest: ${simpleInterest}`);

// 5. Swap Two Numbers

// let a = +prompt("Enter first number (a):");
// let b = +prompt("Enter second number (b):");

// [a, b] = [b, a];

// console.log(`a: ${a}, b: ${b}`);
// document.write(`After Swap -> a: ${a}, b: ${b}`);

// 6. Calculate Average of 3 Numbers

// const num1 = +prompt("Enter first number:");
// const num2 = +prompt("Enter second number:");
// const num3 = +prompt("Enter third number:");

// const avg = (num1 + num2 + num3) / 3;
// console.log(avg);
// document.write(`Average: ${avg}`);

// 7. Calculate Perimeter of Rectangle

// const width2 = +prompt("Enter width of rectangle:");
// const height2 = +prompt("Enter height of rectangle:");

// const perimeter = 2 * (width2 + height2);
// console.log(perimeter);
// document.write(`Perimeter: ${perimeter}`);

// Math.floor() :

// It returns the floor value of any number.

// console.log(Math.floor(4.89)); // 4
// console.log(Math.floor(8.9999)); // 8

// Math.ceil() :

// It returns the ceil value of any number.

// console.log(Math.ceil(8.999)); // 9
// console.log(Math.ceil(8.1)); // 9

// Math.round()

// It Returns the rounded nearest integer.

// console.log(Math.round(8.999)); // 9
// console.log(Math.round(8.001)); // 8
// console.log(Math.round(8.5)); // 9

// .5 >= (Ceil value)
// .5 < (Floor value)

// Math.random() :

// It Returns a pseudo random number between 0 to 1.

let random = Math.random();
// let roundNo = Math.round(random);
// let roundNo = Math.floor(random);
// console.log(random);
// console.log(roundNo);
let diceNo = Math.floor(random * 6) + 1;
console.log(diceNo);


//todo generate random number between 10 to 100;
