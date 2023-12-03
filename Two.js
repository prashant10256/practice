//filter function
//filters myNums Array with condition > 4
//when we write function in single line it retun explicitly
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.filter((num) => num > 4);

//when we write filter function in scope, use return keyword for return values otherwise it returns empty array
const newNum = myNums.filter((num) => {
  return num > 4;
});

console.log(newNum);

//filter values using forEach loop

const Array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//declare array

const newArray = [];
//declare empty array

Array1.forEach((elements) => {
  //forEach lopp
  if (elements > 30) newArray.push(elements);
  // In forEach loop using if condition push elements in newArray[]
});
console.log(newArray);
