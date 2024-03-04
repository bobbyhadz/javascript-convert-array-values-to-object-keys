// EXAMPLE 1 - Convert an Array's Values to Object Keys in JavaScript

const arr = ['name', 'age', 'country'];

const obj = arr.reduce((accumulator, value) => {
  return {...accumulator, [value]: ''};
}, {});

console.log(obj); // 👉️ {name: '', age: '', country: ''}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Array's Values to Object Keys using `Array.forEach`

// const arr = ['name', 'age', 'country'];

// const obj = {};

// arr.forEach(element => {
//   obj[element] = '';
// });

// console.log(obj); // 👉️ {name: '', age: '', country: ''}

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Array's Values to Object Keys using `for...of`

// const arr = ['name', 'age', 'country'];

// const obj = {};

// for (const element of arr) {
//   obj[element] = '';
// }

// console.log(obj); // 👉️ {name: '', age: '', country: ''}
