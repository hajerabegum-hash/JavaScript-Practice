//JavaScript Day 7: Functions & Scopes - Study Notes

/*
1. Introduction to Functions
Functions are reusable blocks of code that perform specific tasks. Think of them as recipes in a cookbook - you
write the recipe once, and you can follow it whenever you need to make that dish.
Why use functions?
Avoid repeating code (DRY principle - Don't Repeat Yourself)
Make code organized and easier to maintain
Break complex problems into smaller, manageable pieces

Function Definition and Calling
Function Definition tells JavaScript what the function should do:*/

// function sayHello() {
//   console.log("Hello, World!");
// }

// // /Function Calling executes the function:
// sayHello();

// // Examples
// // Example 1: Simple greeting function

// function greet() {
//   console.log("Welcome to JavaScript!");
// }
// greet();
// // Output: Welcome to JavaScript!

// // Example 2: Display a message
// function showMessage() {
//   console.log("Learning functions is fun!");
// }
// showMessage();
// Output: Learning functions is fun!

// Example 3: Multiple actions in one function

// function introduction() {
//   console.log("My name is JavaScript");
//   console.log("I was created in 1995");
//   console.log("I run in browsers");
// }
// introduction();
// Output:
// My name is JavaScript
// I was created in 1995
// I run in browsers

/*2. Functions with Arguments

Arguments (also called parameters) allow you to pass information into a function, making it more flexible and
reusable. Think of a coffee machine - the beans and water you put in are the arguments, and the machine uses
them to make your specific drink.*/

//Syntax:

// function functionName(parameter1, parameter2) {
// code that uses the parameters
// }

//  Examples

// Example 1: Personalized greeting

// function greetuser(name) {
//   console.log("hello," + name + "!");
// }

// greetuser("Alice");
// // Output: Hello, Alice!
// greetuser("Bob");
// // Output: Hello, Bob!
// greetuser("Charlie");
// // Output: Hello, Charlie!

// Example 2: Calculate sum of two numbers

// function addNumber(a, b) {
//   let sum = a + b;
//   console.log("sum is:" + sum);
// }
// addNumber(3, 5);
// // Output: Sum is: 8
// addNumber(10, 20);
// // Output: Sum is: 30

// Example 3: Calculate average of three numbers
// function calcAverage(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log("Average is:" + avg);
// // }
// calcAverage(10, 20, 30);
// // Output:Average is: 20

// calcAverage(85, 90, 95);
// Output:Average is: 90

// Example 4: Create personalized messages

// function createMessage(name, age) {
//   console.log(name + "is" + age + "years old");
// }
// createMessage("Sarah", 25);

// // Output: Sarah is 25 years old
// createMessage("Tom", 30);
// // Output: Tom is 30 years old

//Example 5: Calculate rectangle area

// function calculateArea(length, width) {
//   let area = length * width;
//   console.log("Area is:" + area);
// }
// calculateArea(5, 10);
// // Output: Area is: 50
// calculateArea(7, 3);
// // Output: Area is: 21

// 3. The return Keyword

// The return keyword sends a value back from a function to where it was called. Think of an ATM - you insert
// your card and PIN (arguments), and it returns cash to you. Once return executes, the function stops
// immediately.

// Key Points:
// return sends a value back from the function
// Code after return never executes
// Allows you to store or use the result in other operations

// Examples
// Example 1: Return sum of two numbers

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(5, 10);
// console.log(result);

// Output: 15
// let total = sum(100, 200);
// console.log(total);
// // Output: 300

// Example 2: Return product of two numbers

// function multiply(x, y) {
//   return x * y;
// }
// let answer = multiply(4, 5);
// console.log(answer);
// // Output: 20

// console.log(multiply(3, 7));
// Output: 21

// // Example 3: Code after return never runs
// function test() {
//   return 10;
//   console.log("this will never print");
//   return 20; // This is also ignored
// }
// let value = test();
// console.log(value);
// Output: 10

//Example 4: Using return value in calculations

// function getPrice() {
//   return 50;
// }
// let price = getPrice();

// let tax = price * 0.1;
// let total = price + tax;
// console.log(total);
// Output: 55

//Example 5: Return string

// function getGreeting(name) {
//   return "Hello, " + name;
// }
// let message = getGreeting("Alice");
// console.log(message);
// // Output: Hello, Alice
// console.log(getGreeting("Bob"));
// // Output: Hello, Bob
