function submit() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;

  console.log(name);
  console.log(city);
  
  

  document.getElementById("a1name").innerText = name;
  document.getElementById("a1city").innerText = city;

  document.getElementById("a1name").innerText = "";
  document.getElementById("a1city").innerText = "";

  document.getElementById("dataCard").classList.remove("divHide");

}
