// Custom implementation of map, filter, and reduce using prototype

// Custom map function
Array.prototype.customMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Custom filter function
Array.prototype.customFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Custom reduce function
Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
};

// Testing the custom functions
const numbers = [1, 2, 3, 4, 5];

// Using customMap
const doubled = numbers.customMap(num => num * 2);
console.log("Custom Map:", doubled); // [2, 4, 6, 8, 10]

// Using customFilter
const evenNumbers = numbers.customFilter(num => num % 2 === 0);
console.log("Custom Filter:", evenNumbers); // [2, 4]

// Using customReduce
const sum = numbers.customReduce((acc, num) => acc + num, 0);
console.log("Custom Reduce:", sum); // 15


//custom map function
Array.prototype.myMapWithCondition = function (callback, condition) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i], i, this)) {
            result.push(callback(this[i], i, this));
        } else {
            result.push(this[i]); // Keep original value if condition is false
        }
    }
    return result;
};

// Example: Double only even numbers
const numbers = [1, 2, 3, 4, 5];

const doubledEvens = numbers.myMapWithCondition(
    (num) => num * 2, 
    (num) => num % 2 === 0
);

console.log(doubledEvens); 


//custom filter function


Array.prototype.myReject = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            result.push(this[i]); // Keep elements that do NOT match the condition
        }
    }
    return result;
};

// Example: Remove negative numbers
const values = [-3, 2, -7, 8, -1, 5];

const positiveNumbers = values.myReject((num) => num < 0);

console.log(positiveNumbers); 



//custom reduce function
Array.prototype.myReduceWithLogging = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        console.log(`Step ${i}: Accumulator = ${accumulator}, Current Value = ${this[i]}`);
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Example: Calculate product of all numbers
const nums = [2, 3, 4];

const product = nums.myReduceWithLogging((acc, num) => acc * num, 1);

console.log("Final Product:", product);
