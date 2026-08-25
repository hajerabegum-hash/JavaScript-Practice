// JavaScript Day 6: Object Literals & Math Object - Study Notes

// 1. Introduction to Object Literals

// Object literals are collections of key-value pairs used to store related data. Unlike arrays that use numeric
// indices, objects use named keys.

// Syntax: let objectName = { key1: value1, key2: value2 };

// Examples:

//// Example 1: Simple student object

// let student = {
//   name: "Alice",
//   age: 35,
//   grade: "A",
// };
// console.log(student.name);
// //output: Alice

// Example 2: Product object

// let product = {
// title: "Laptop",
// price: 45000,
// inStock: true
// };

// // Example 3: Geographic location

// let location = {
// latitude: "28.7041° N",
// longitude: "77.1025° E",
// city: "Delhi"
// };

// // Example 4: Book object

// let book = {
// title: "JavaScript Guide",
// author: "John Doe",
// pages: 350,
// published: 2024
// };

// // Example 5: Social media post

// let post = {
// username: "coder_dev",
// content: "Learning JavaScript!",
// likes: 150,
// comments: 23
// };

//2. Accessing Object Properties

// There are two ways to access values in an object: dot notation and bracket notation.

//Examples:

// Example 1: Using dot notation

// let student = { name: "Alex", age: 21, city: "Seattle" };

// console.log(student.name);
// //output: Alex

// console.log(student.age);
// //output:21

// console.log(student.city);
// //output: Seattle

// // Example 2: Using bracket notation

// console.log(student["city"]);
// //output: Seattle

// console.log(student["name"]);
//output: Alex

// Example 3: When to use bracket notation (spaces in key)

// let person = { "first name": "Jhon", "last name": "Doe" };
// console.log(person["first name"]);
// //output: "John"

//// Example 4: Using variables with bracket notation

// let key = "age";
// console.log(student[key]);

//output:21

// Example 5: Mixed access

// let car = { brand: "Toyota", model: "Camry", year: 2024 };
// console.log(car.brand);
// //output:"Toyota"
// console.log(car["model"]);
// //output: camry

// 3. Modifying Objects (Add, Update, Delete)

// Objects are mutable - you can change them after creation.

//Examples:

// Example 1: Updating existing properties

// let student = { name: "Alex", age: 21, city: "Seattle" };
// student.age = 22;
// student.city = "Boston";
// // console.log(student);
// //  output: { name: "Alex", age: 22, city: "Boston" }

// // Example 2: Adding new properties

// student.grade = "A+";
// student.major = "Computer Science";
// console.log(student);
// //output: { name: "Alex", age: 22, city: "Boston", grade: "A+", major: "Computer Science" }

// // Example 3: Deleting properties

// delete student.city;
// console.log(student);
//output: {name: 'Alex', age: 22, grade: 'A+', major: 'Computer Science'}

// Example 4: Multiple modifications

// let product = { name: "Phone", price: 30000 };
// console.log(product);
// //output:{name: 'Phone', price: 30000}

// //update
// product.price = 28000;
// console.log(product);

// //output:{name: 'Phone', price: 28000}

// //add
// product.brand = "samsung";
// console.log(product);
// //output:{name: 'Phone', price: 28000, brand: 'samsung'}

// //delete

// delete product.name;
// console.log(product);

//output: {price: 28000, brand: 'samsung'}

// Example 5: Using bracket notation for modifications

// let car = { brand: "Honda" };
// console.log(car);
// // output:{brand: 'Honda'}

// //add

// car["model"] = "Civic";
// car["year"] = 2024;
// console.log(car);
// // output: { brand: "Honda", model: "Civic", year: 2024 }

//4. Nested Objects (Object of Objects)

// Objects can contain other objects as values, creating nested structures. This is useful for organizing related data.

// Examples:

// Example 1: Basic nested objects

// let userDatabase = {
//   user1: { name: "Alice", grade: "A+", city: "Austin" },
//   user2: { name: "Bob", grade: "B", city: "Denver" },
// };

// console.log(userDatabase.user1.name);
// //output: Alice
// console.log(userDatabase.user2.grade);
// //output: B

// Example 2: Company departments
// let company = {
//   engineering: { employees: 50, manager: "Jhon" },
//   sales: { employees: 30, manager: "Sarah" },
//   hr: { employees: 10, manager: "Mike" },
// };
// console.log(company.engineering.employees);

// //output:50

// console.log(company.sales.manager);
//output: Sarah

// Example 3: Student records with subjects

// let students = {
//   student1: { name: "Emma", math: 85, science: 90 },
//   student2: { name: "Oliver", math: 78, science: 88 },
// };
// console.log(students.student1.math);
// //output: 85
// console.log(students.student2.science);
// //output: 88

// // Example 4: Product inventory by category

// let inventory = {
//   electronics: { laptops: 25, phones: 50 },
//   clothing: { shirts: 100, pants: 75 },
// };
// console.log(inventory.electronics.laptops);
// //output: 25
// console.log(inventory.clothing.shirts);
// //output: 100

// // Example 5: Accessing and modifying nested values

// let school = {
//   classA: { students: 30, teacher: "Ms. Smith" },
//   classB: { students: 28, teacher: "Mr. Brown" },
// };
// school.classA.students = 32;
// school.classB.teacher = "Ms. Johnson";
// console.log(school.classA.students);
// //output: 32
// console.log(school.classB.teacher);
// //output: "Ms. Johnson"

// 5. Array of Objects

// An array of objects is the most common data structure for storing collections of similar items. This is how most

// APIs return data.

//Examples:

// Example 1: List of students

// let students = [
//   { name: "Alice", age: 20, grade: "A" },
//   { name: "Bob", age: 21, grade: "B" },
//   { name: "Charlie", age: 19, grade: "A=" },
// ];
// console.log(students[0].name);
// //output: "Alice"
// console.log(students[1].grade);
// // output: "B"
// console.log(students.length);
// //output:  3

// Example 2: Product catalog

// let products = [
//   { id: 101, name: "Laptop", price: 45000 },
//   { id: 102, name: "Mouse", price: 500 },
//   { id: 103, name: "Keyboard", price: 1500 },
// ];
// console.log(products[0].name);
// //OUTPUT: "Laptop"
// console.log(products[2].price);
//output: 1500

// Example 3: Social media posts

// let posts = [
//   { username: "user1", content: "Hello World!", likes: 50 },
//   { username: "user2", content: "JavaScript is fun", likes: 120 },
//   { username: "user3", content: "Coding daily", likes: 85 },
// ];
// console.log(posts[1].username);
// // output: "user2"

// console.log(posts[0].likes);
// //output:  50

// Example 4: Course list

// let courses = [
//   { name: "Math", id: 101, credits: 3 },
//   { name: "Physics", id: 102, credits: 4 },
//   { name: "Chemistry", id: 103, credits: 3 },
// ];
// console.log(courses[0].credits);
// // //output:  3
// console.log(courses[1].name);
////output: "Physics"

// Example 5: Modifying array of objects

// let cars = [
//   { brand: "Toyota", model: "Camry", year: 2020 },

//   { brand: "Honda", model: "Civic", year: 2021 },
// ];
// console.log(cars);
//output: (2) [{…}, {…}]
// 0:{brand: 'Toyota', model: 'Camry', year: 2020}
// 1:{brand: 'Honda', model: 'Civic', year: 2021}

//modify

// cars[0].year = 2024;

// cars.push({ brand: "Ford", model: "Mustang", year: 2023 });
// console.log(cars);
//output: (3) [{…}, {…}, {…}]
// 0: {brand: 'Toyota', model: 'Camry', year: 2024}
// 1: {brand: 'Honda', model: 'Civic', year: 2021}
// 2: {brand: 'Ford', model: 'Mustang', year: 2023}

//6. The Math Object - Introduction

// The Math object is a built-in JavaScript object that provides mathematical constants and functions. You don't
// need to create it - it's always available.

// Examples:
