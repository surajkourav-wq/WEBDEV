// creation
let arr = [12, 15, 25, 32, 48, 55];

// reading
for (var i = 0; i < 6; i++) {
  console.log(arr[i]);
}
console.log(arr);

// updation
arr[2] = arr[2] + 10;
console.log(arr);

// deletion
arr = [];
console.log(arr);


let arr1 = [12, 15, 25, 32, 48, 90, 1, 55];
console.log(arr1);

// add element at last 
arr1.push(50);
console.log(arr1);

// remove last element
arr1.pop();
console.log(arr1);

// add element at first
arr1.unshift(11);
console.log(arr1);

// remove rlement at first
arr1.shift();
console.log(arr1);

// value at index 
console.log(arr1.at(3));

// index of value
console.log(arr1.indexOf(32));

// element exist or not
console.log(arr1.includes(45));

// array sorting
console.log("sort : "+arr1.sort());

// sort in desecending order
console.log("reverse : " + arr1.reverse());

let array = [10, 78, 95, 52, 64, 57];

console.log(array.sort());
// used for sorting
array.sort((a, b) => a - b);

console.log(array.find((val) => val > 10));
console.log(array.findIndex((val) => val > 10));
console.log(array.findLastIndex((val) => val > 10));

// for each
array.forEach((element) => {
  console.log(element);
});

// length of array
console.log(array.length);

let ar = [15, 43, 67, 23, 45, 67, 23, 65, 98];
console.log(ar.filter((val) => val > 50));

console.log(ar.slice(2,5));

let ab = "this is web devlopment class";

console.log(ab);
console.log(ab.split(" "));

let abc = "this-is-web-devlopment-class";
console.log(abc.split("-"));




