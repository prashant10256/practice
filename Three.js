const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumbers.map((num) => {
//   return num + 10;
// });

const newNum = myNumbers
  .map((num) => num * 10) // this function multiply by 10 with array elements
  .map((num) => num + 1) // this function adds one in above functions results
  .filter((num) => num >= 40); //this function returns elements which is >40 from above functions results
console.log(newNum);
