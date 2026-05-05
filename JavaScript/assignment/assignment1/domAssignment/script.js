function heading() {
  document.getElementById("myHeading").innerHTML = "heading changed";
}

function paraChange() {
  document.getElementById("myPara").innerHTML = "Paragrapg content change";
}

function heading2() {
  document.getElementById("myHeading2").innerHTML = "Welcome";
}

const text = document.getElementById("myPara2").innerHTML;
console.log(text);

function changeContent() {
  let element = document.getElementById("myElement");

  element.innerHTML = "New Content Updated!";
}

function changeText() {
  document.getElementById("text").innerHTML = "Changed!";
}

function changeContent2() {
            document.getElementById("heading").innerHTML = "New Heading!";
            document.getElementById("para").innerHTML = "New Paragraph!";
        }
