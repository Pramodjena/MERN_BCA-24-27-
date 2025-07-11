# Project Based Learning (JavaScript Concepts)

## Table of Contents

- [What is JavaScript](#what-is-javascript)
- [Variable](#variable)
- [Arrays](#arrays)
- [Objects](#objects)
- [Functions](#functions)
  - [Regular Functions](#regular-functions)
  - [Arrow Functions](#arrow-functions)
- [Ternary Operator](#ternary-operator)
- [DOM Manipulation](#dom-manipulation)
  - [document.getElementById()](#documentgetelementbyid)
  - [querySelector()](#queryselector)
  - [DOMContentLoaded](#domcontentloaded)
  - [Creating Elements](#creating-elements)
- [localStorage](#localstorage)
- [Summary Table](#summary-table)

---

## What is JavaScript

**JavaScript is a versatile, dynamically typed programming language**.

- In three ways we can add js file in HTML
  - Inline
  - Internal
  - External

```html
<html>
  <head>
    <!-- External -->
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
     <!-- Inline -->
    <button onclick="alert('Hello JavaScript')">
    <!-- Internal  -->
    <script>
        console.log("Hello JavaScript");
    </script>
  </body>
</html
```

## Variable

**Definition:**
A variable is a named container that holds data or information which can be referenced and manipulated for later use.

- Using these keywords we can declare a variable :
  - `var`(function scoped)
  - `let`(block scoped)
  - `const`(block scoped)

```js
var myName = "Pramod";
let myAge = 26;
const myCity = "Bhubaneswar"; // we can't re-assign
console.log("My name is", myName);
console.log(`My name is ${myName} and my age is ${myAge} and from ${myCity}`);
```

## Arrays

**Definition:**  
An array is an ordered list that stores multiple values in a single variable.

**Real-Life Example:**  
Like a shopping list:

```
1. Milk
2. Eggs
3. Bread
```

**How to Use:**

```javascript
let tasks = []; // Empty array

// Adding items
tasks.push("Buy milk"); // Position 0
tasks.push("Call mom"); // Position 1

console.log(tasks); // Output: ["Buy milk", "Call mom"]
```

**Key Features:**

- Ordered (each item has an index)
- Can store different data types
- Common methods: `push()`, `pop()`, `filter()`, `map()`

**Task Manager Example:**

```javascript
let tasks = [];

// Add task
tasks.push({ id: 1, text: "Learn JavaScript", completed: false });

// Delete task
tasks = tasks.filter((task) => task.id !== 1);
```

---

## Objects

**Definition:**  
An object stores related information in key-value pairs.

**Real-Life Example:**  
Like a person's ID card:

```
Name: "Alice"
Age: 25
Job: "Developer"
```

**How to Use:**

```javascript
let person = {
  name: "Alice",
  age: 25,
  job: "Developer",
};

// Accessing properties
console.log(person.name); // "Alice"

// Modifying
person.age = 26;
```

**Task Manager Example:**

```javascript
const task = {
  id: 1,
  text: "Learn JavaScript",
  completed: false,
};
```

---

## Functions

### Regular Functions

**Definition:**  
Reusable blocks of code that perform specific tasks.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

// Parameters vs Arguments
greet("Alice");
```

---

### Arrow Functions

**Shorter syntax for writing functions:**

```javascript
// Basic
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Implicit return
const add = (a, b) => a + b;

// In callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
```

---

## Ternary Operator

**Definition:**  
Shorthand for `if-else`.

```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
```

---

## DOM Manipulation

### document.getElementById()

**Finds an HTML element by its ID:**

```javascript
const taskInput = document.getElementById("taskInput");
```

---

### querySelector()

**Finds elements using CSS selectors:**

```javascript
// First element with class 'delete-btn'
document.querySelector(".delete-btn");

// Inside an element
li.querySelector(".delete-btn");
```

---

### DOMContentLoaded

**Ensures code runs only after HTML is loaded:**

```javascript
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  renderTasks();
});
```

---

### Creating Elements

**Dynamically generate HTML:**

```javascript
function createTaskElement(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-btn">Delete</button>
  `;
  return li;
}

// Usage
document.getElementById("taskList").appendChild(taskElement);
```

---

## localStorage

**Definition:**  
Browser storage that persists data after closing the page.

**Real-Life Example:**  
Like a notebook that saves your notes.

**How to Use:**

```javascript
// Save data (must be string)
localStorage.setItem("tasks", JSON.stringify(tasks));

// Load data
const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  tasks = JSON.parse(storedTasks);
}
```

**Why `JSON.stringify()`?**

- `localStorage` only stores strings
- Converts arrays/objects to strings: `"[{id:1, text:'Task'}]"`
- `JSON.parse()` converts it back to original format

---

## Summary Table

| Concept        | Example                              | Key Point          |
| -------------- | ------------------------------------ | ------------------ |
| Array          | `let tasks = []`                     | Ordered list       |
| Object         | `{id:1, text:"Task"}`                | Key-value pairs    |
| Function       | `function add(a,b){return a+b}`      | Reusable code      |
| Arrow Function | `const add = (a,b) => a+b`           | Shorter syntax     |
| Ternary        | `age >= 18 ? "Adult" : "Child"`      | If-else shorthand  |
| getElementById | `document.getElementById('btn')`     | Find by ID         |
| querySelector  | `document.querySelector('.btn')`     | CSS selector       |
| localStorage   | `localStorage.setItem('key', value)` | Persistent storage |

---

> 📝 **Tip:** Use browser DevTools (F12) to practice and debug everything in real-time.

