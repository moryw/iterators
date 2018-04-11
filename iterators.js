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

// //secretMessage
// let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//
// // Create the secretMessage array below
// let secretMessage = animals.map(function(animal) { // regular function
//   return animal.charAt(0);
// });
//
// let secretMessage = animals.map(animal => animal.charAt(0)); //arrow function
//
// console.log(secretMessage.join(''));
//
// let bigNumbers = [100, 200, 300, 400, 500];
//
// // Create the smallNumbers array below
// let smallNumbers = bigNumbers.map(function(number) { //regular function
//   return number / 100;
// });
//
// let smallNumbers = bigNumbers.map(num => num/100); //arrow function
//
// console.log(smallNumbers);


// //.filter examples
// let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
//
// let shortWords = words.filter(function(word) { //regular function
//   return word.length < 6;
// });
//
// //let shortWords = words.filter(word => word.length < 6); //arrow function
//
//
// let randomNumbers = [375, 200, 3.14, 7, 13, 852];
//
// // Call .filter() on randomNumbers below
// let smallNumbers = randomNumbers.filter(number => number < 250);
//
// let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
//
// let longFavoriteWords = favoriteWords.filter(function(word) {
//   return word.length > 7;
// });
//
// let longFavoriteWords = favoriteWords.filter(word => word.length > 7); //arrow function


// //fix broken methods with documentation
// let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
//
// // Something is missing in the method call below
//
// console.log(words.some(function(word) {
//   return word.length < 6;
// }));
//
// // Use filter to create a new array
// let interestingWords = words.filter(function(word) { //regular function
//   return word.length > 5;
// });
//
// let interestingWords = words.filter(word => word.length > 5); //arrow function
//
// console.log(interestingWords);
//
// // Make sure to uncomment the code below and fix the incorrect code before running it
//
// console.log(interestingWords.every(word => word.length > 5));


//choose correct iterator methods
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);























//end js
