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

//new example

const books = [
  { title: "Book One", gerne: "Finction", publish: 1981, edition: 2004 },

  { title: "Book Two", gerne: "Non-Finction", publish: 1992, edition: 2008 },

  { title: "Book Three", gerne: "History", publish: 1999, edition: 2007 },

  { title: "Book Four", gerne: "Non-Finction", publish: 1989, edition: 2010 },

  { title: "Book Five", gerne: "Science", publish: 2009, edition: 2014 },

  { title: "Book Six", gerne: "Finction", publish: 1987, edition: 2010 },

  { title: "Book Seven", gerne: "History", publish: 1986, edition: 1996 },

  { title: "Book Eight", gerne: "Science", publish: 2011, edition: 2016 },

  { title: "Book One", gerne: "Non-Finction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.gerne === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.gerne === "History";
});

console.log(userBooks);
