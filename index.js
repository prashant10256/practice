//ForEach loop it iterates coding array and it prints array elements.
//But it returns undefined
//forEach loop never returns values

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);
