let arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
  console.log(element);
});

arr.forEach((element) => {
  console.log(element);
});

let fruits = ["apple", "banana", "mango"];

fruits.forEach((element) => {
  console.log(element);
});

fruits.forEach(function (element, index) {
  console.log(index, element);
});
