// //cc iterators example code
//
// let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
//
// artists.forEach(function(person) {
//   console.log(person + ' is one of my favorite artists.');
// });
//
// let numbers = [1, 2, 3, 4, 5];
//
// let squareNumbers = numbers.map(function(number) {
//   return number * number;
// });
//
// console.log(squareNumbers);
//
// let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
//
// let onlyNumbers = things.filter(function(thing) {
//   return typeof thing === 'number';
// });
//
// console.log(onlyNumbers);


//.forEach method

// let fruits = ['mango', 'papaya', 'pineapple', 'apple'];
//
// fruits.forEach(fruit =>
//   console.log('I want to eat a ' + fruit));

// //.map method
// let numbers = [1, 2, 3, 4, 5];
// let bigNumbers = numbers.map(numbers => numbers * 10);
// console.log(bigNumbers);

//secretMessage
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(function(animal) { // regular function
  return animal.charAt(0);
});

let secretMessage = animals.map(animal => animal.charAt(0)); //arrow function

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(number) { //regular function
  return number / 100;
});

let smallNumbers = bigNumbers.map(num => num/100); //arrow function

console.log(smallNumbers);
























//end js
