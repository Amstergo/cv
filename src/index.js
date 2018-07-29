import "./css/style.css";

function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.classList.add("hello");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to "].join("\n\n");

  return element;
}

document.body.appendChild(component());
