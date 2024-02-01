// 1.
function sum(array) {
  try{
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch (e) {
    if (e instanceof TypeError) console.log(e.message);
  }
}

let res = sum(null);
console.log(res);

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here 
function sayName(name) {
  try {
    if (typeof(name) != 'string') {
      throw new TypeError('Invalid name! Must be a string!');
    }
    console.log(name);
  } catch(e) {
    console.error(e.message);
  }
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(null);
} catch(e) {
  console.log('Hello World!');
}