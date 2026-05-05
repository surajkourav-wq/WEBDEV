// console.log("Hello world");
// console.log("Hello world1234");

// let x = 10;
// let y = "10";

// var a = 10;
// var a = 20;
// var c = 10;

// var b = 10;

// console.log(a=b);
// console.log(a==b);
// console.log(a===b);

// console.log(a==c);
// console.log(a===c);

// console.log(x==y);  // compares value only
// console.log(x===y); // compares value and type both

// console.log(typeof x);
// console.log(typeof y);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// let p = 5;
// let q = 10;
// let r = "10";

// console.log(p>=q);
// console.log(q!=p);
// console.log(p<=q);

// console.log(p==q);
// console.log(p===q);

// let s = 10;
// let t = 10;

// console.log(s<t);
// console.log(s==t);
// console.log(s>=t);

let age = 20;

if (age >= 20) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

let num = 10;

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let marks = 95;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}

let usrn = "abcd";
let pass = "1234";
let email = "suraj094@gmail.com"

if (usrn === "abcd" && pass === "1234" && email==="suraj094@gmail.com") {
  console.log("login success");
} else {
  console.log("login failed");
}

usrn === "abcd" && pass === "1234"
  ? console.log("login success")
  : console.log("login failed");

let data;
let name = "suraj";

//   if(name) {
//     data = name;
//   }
//   else {
//     data = "N/A"
//   }

data = name || "N/A";
console.log(data);

let choice = 1;

switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("paani");
  }
}

let select = 1;

switch (select) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("paani");
  }
}

let garde = 95;

if (garde >= 90) {
  console.log("A");
} else if (garde >= 75) {
  console.log("B");
} else if (garde >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}
