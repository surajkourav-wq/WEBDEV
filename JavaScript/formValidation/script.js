function submit() {
  const name = document.getElementById("fullName").value;
  const number = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  console.log(name);
  console.log(number);
  console.log(email);
  console.log(pass);

  //   document.getElementById("nameError").innerText = "";
  //   document.getElementById("emailError").innerText = "";
  //   document.getElementById("phoneError").innerText = "";

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }
  if (!/^[6-9]\d{9}$/.test(number)) {
    document.getElementById("phoneError").innerText = "Invalid Phone Number";
  }
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }
}
