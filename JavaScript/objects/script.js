let fd = [
  {
    name: "Suraj kourav",
    dob: "2002-05-15",
    city: "Bhopal",
    phoneNumber: "9876543210",
    profession: "Software Developer",
  },
  {
    name: "Amit Sharma",
    dob: "2001-09-20",
    city: "Indore",
    phoneNumber: "9123456780",
    profession: "Data Analyst",
  },
  {
    name: "Priya Verma",
    dob: "2003-02-10",
    city: "Delhi",
    phoneNumber: "9988776655",
    profession: "UI/UX Designer",
  },
  {
    name: "Rahul Singh",
    dob: "2000-11-05",
    city: "Mumbai",
    phoneNumber: "9012345678",
    profession: "Backend Developer",
  },
  {
    name: "Neha Gupta",
    dob: "2002-07-25",
    city: "Pune",
    phoneNumber: "9090909090",
    profession: "QA Engineer",
  },
];

fd.forEach((element) => {
  console.log(element);
});

fd.forEach((element) => {
  console.log(element["phoneNumber"]);
});

fd.forEach((element) => {
  console.log(element["name"]);
});

fd.forEach((element) => {
  console.log(element["dob"]);
});

// bracket notation works on both array and Json
console.log(fd);
console.log(fd[1]["name"]);

// dot notation it only works on Json
console.log(fd[1].name);

let sd = {
  name: "suraj kourav",
  dob: "10-05-2004",
  marks: {
    eng: 80,
    hin: 75,
    maths: 85,
  },
  city: "bhopal",
};

console.log(sd.marks.maths);
console.log(sd["marks"]["maths"]);

//function
console.log(Object.keys(sd));
console.log(Object.values(sd));
console.log(Object.entries(sd));

fd.map((element, idx) => {
  console.log(idx);
  console.log(element);
});
