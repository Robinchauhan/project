function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function removeField() {
  let del = document.getElementById("wed");
  del.parentElement.removeChild(del);
  return false;
}
function removeField2() {
  let del = document.getElementById("aqd");
  del.parentElement.removeChild(del);
  return false;
}
function removeField3() {
  let del = document.getElementById("skd");
  del.parentElement.removeChild(del);
  return false;
}

function addNewAQField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addNewskField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButtonOb);
}

//generating cv
function generateCV() {
  // console.log("hello");

  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  // contact

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // address

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  // objective

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // Work exprience

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  // academic

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // skilss

  let sks = document.getElementsByClassName("skField");

  let str2 = "";

  for (let e of sks) {
    str2 += `<li> ${e.value} </li>`;
  }

  document.getElementById("skT").innerHTML = str2;

  // image
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);

  console.log(reader.result);

  // set the image

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
  // hide the page 1 and page 2

  // document.getElementById("cv-form").style.display = "none";
  // document.getElementById("cv-template").style.display = "block";
}

// print cv

function printCV() {
  var printContents = document.getElementById("cv-template").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();

  document.body.innerHTML = originalContents;
}


// color  change

function colorchange(x){
  document.getElementById("header").style.backgroundColor=x;
  document.getElementById("nav").style.backgroundColor=x;
  document.getElementById("nav1").style.backgroundColor=x;
  document.getElementById("footer").style.backgroundColor=x;
  // document.getElementById("bgcolor").style.backgroundColor=x;
}