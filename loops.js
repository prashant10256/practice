// FOR LOOP

// take input from the user
const number = 10;

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log("The sum of natural numbers:", sum);

//FOR IN LOOPS
let obj = {
  kia: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 97,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// Array.from
let name = "Harry";
let arr = Array.from(name); //This method create array from object
console.log(arr);

//for...of

let num = [3, 5, 1, 4, 2];
for (let i of num) {
  console.log(i);
}

//for...in
