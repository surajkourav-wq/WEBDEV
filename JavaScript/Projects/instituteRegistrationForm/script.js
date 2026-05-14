document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // personal details
    const fn = document.getElementById("fullName").value.trim();
    const em = document.getElementById("email").value.trim();
    const pn = document.getElementById("number").value;
    const gndr = document.querySelector("input[name='gender']:checked")?.value;
    const dob = document.getElementById("DOB").value;

    // Academic details
    const qual = document.getElementById("Qualification").value;
    const grd = document.getElementById("Grade").value;

    // Course information
    const crs = document.getElementById("Course").value;

    const timings = [];
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    // Address
    const adrs = document.getElementById("Address").value;
    const cty = document.getElementById("City").value;
    const pinc = document.getElementById("pinCode").value;

    // Guardians Details
    const guarName = document.getElementById("guardianName").value;
    const guarNum = document.getElementById("guardianNumber").value;

    // Additional information
    const ref = document.getElementById("reference").value;
    const spclReq = document.getElementById("specialRequirements").value;

    const registrationData = {
      FullName: fn,
      Email: em,
      Phone: pn,
      DateofBirth: dob,
      Gender: gndr,
      Qualification: qual,
      Marks: grd,
      Course: crs,
      Timings: timings,
      Address: adrs,
      City: cty,
      PinCode: pinc,
      GuardianName: guarName,
      GuardianNumber: guarNum,
      Reference: ref,
    };

    validateData(registrationData)
      ? (console.log("Registration Data:", registrationData),
        alert("Registration successful! Check console for details."))
      : alert("Registration unsuccessfull! Enter valid Data.");
  });

document
  .getElementById("registrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function validateData(data) {
  document.querySelectorAll(".manualError").forEach((item) => {
    item.innerText = "";
  });

  let isValid = true;

  console.log(data);

  if (!/^[A-Za-z]+$/.test(data.City)) {
    document.getElementById("cityError").innerText =
      "Please enter a valid city name";
    isValid = false;
  }

  if (!/^\d{6}$/.test(data.PinCode)) {
    document.getElementById("pinCodeError").innerText =
      "Enter a valid 6-digit pin code";
    isValid = false;
  }

  if (data.Reference == "") {
    document.getElementById("referenceError").innerText =
      "Select an option";
    isValid = false;
  }

  if (data.Gender == "") {
    document.getElementById("genderError").innerText =
      "Select an option";
    isValid = false;
  }

  if (!data.FullName) {
    document.getElementById("fullNameError").innerText = "Full Name Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.FullName)) {
    document.getElementById("fullNameError").innerText =
      "Only alphabets and spaces are allowed";
    isValid = false;
  }

  if (!/^[A-Za-z\d\.\_]+@(gmail.com|outlook.com|ricr.in)$/.test(data.Email)) {
    document.getElementById("emailError").innerText =
      "Only standard Email format allowed with gmail.com";
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(data.Phone)) {
    document.getElementById("phoneError").innerText =
      "Only Indian mobile numbers allowed";
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(data.GuardianName)) {
    document.getElementById("guardianNameError").innerText =
      "Enter guardian's full name";
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(data.GuardianNumber)) {
    document.getElementById("guardianNumberError").innerText =
      "Enter a valid 10-digit contact number";
    isValid = false;
  }

  if (data.Qualification == "") {
    document.getElementById("qualificationError").innerText =
      "Please select a qualification";
    isValid = false;
  }

  if (data.Marks == "") {
    document.getElementById("gradeError").innerText =
      "Enter a valid grade";
    isValid = false;
  }

  if (data.Course == "") {
    document.getElementById("courseError").innerText =
      "Select a course";
    isValid = false;
  }

  if (data.Timings == "") {
    document.getElementById("timingError").innerText =
      "Select a batch timing";
    isValid = false;
  }

  return isValid;
}
