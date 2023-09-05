# Challenge Week 4 - Array Manipulation

## Case 1 - Using `map` to Transform and Extract Data
Given an array of objects representing people's information, use the `map` method to create a new array containing only the names of people.
```javascript
const people = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

// Expected Output: ['Alice', 'Bob', 'Charlie']
```

## Case 2 - Using `filter` to Select Specific Data
Given an array of products, use the `filter` method to create a new array containing only products that are currently in stock.
```javascript
const products = [
  { id: 1, name: 'Laptop', inStock: true },
  { id: 2, name: 'Phone', inStock: false },
  { id: 3, name: 'Tablet', inStock: true },
  { id: 4, name: 'Headphones', inStock: false },
];

// Expected output: [{ id: 1, name: 'Laptop', inStock: true }, { id: 3, name: 'Tablet', inStock: true }]
```

## Case 3 - Using `reduce` to Calculate Aggregations
Given an array of numbers, use the `reduce` method to calculate the total sum of all even numbers in the array.
```javascript
const numbers = [2, 4, 7, 8, 10, 15];

// Expected Output: 24
```

## How to Submit
1. Fork this [repository](https://github.com/arifintahu/msib-challenge-week-4)
2. Clone forked repository
3. Create a new branch `git checkout -b solution`
4. Create a folder of your nickname `mkdir nickname`
5. Create files `sol1.js`, `sol2.js`, and `sol3.js` in your folder
6. Commit and push your changes
7. Create a Pull Request to original repository
