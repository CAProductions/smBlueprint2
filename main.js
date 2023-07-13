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
  var original = checkForColor(color1)[0];
  var duplicates = checkForColor(color2);
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
  })
}
/***          ***/

function checkForColor(color) {
  let returnValue = [];
  data.bodies[0].childs.forEach((e) => {
    if (e.color == color.replaceAll("#", "").toLowerCase()) {
      returnValue.push(e);
    }
  });
  return returnValue;
}