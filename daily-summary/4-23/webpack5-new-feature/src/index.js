import * as $ from "jquery";
function component() {
  const ele = document.createElement("h1");
  ele.innerHTML = "永不服输吗? Yes!";
  return ele;
}

document.append(component());
