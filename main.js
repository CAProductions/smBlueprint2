updateColors();
var data;
var color1;
var color2;
var color3;

function update() {
  data = JSON.parse(document.getElementById("json").value);
  color1 = document.getElementById("color1").value;
  color2 = document.getElementById("color2").value;
  color3 = document.getElementById("color3").value;
  var original = checkForColor(color1);
  var duplicates = checkForColor(color2);
  if (original == null || duplicates == null) {
    alert('make sure that yo color is in the thang bro....!!!! 😁💀💀💀☠️💀☠️💀☠️💀☠️☠️💀☠️🔫🔫🔫🔫')
    return;
  } else {
    original = original[0]
  }
  duplicates.forEach((duplicate) => {
    duplicate.pos = JSON.parse(JSON.stringify(original.pos));
    duplicate.color = color3;
  });
  original.color = color3;
  let output = document.getElementById("return");
  output.innerHTML = JSON.stringify(data);
}
function copy() {
  if (data) {
    navigator.clipboard.writeText(JSON.stringify(data));
  }
}

function updateColors() {
  let elements = document.querySelectorAll("table>tbody>tr>td");
  let colors = [];
  elements.forEach((element) => {
    element.style.backgroundColor = element.innerText;
    element.addEventListener("click", (e) => {
      navigator.clipboard.writeText(e.target.innerText);
    });
  });
}
/***          ***/

function checkForColor(color) {
  let returnValue = [];
  data.bodies[0].childs.forEach((e) => {
    if (e.color == color.replaceAll("#", "").toUpperCase()) {
      returnValue.push(e);
    }
  });
  if (returnValue.length > 0) {
    return returnValue;
  } else {
    return null;
  }
}
