const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", function() {
  myButton.style.backgroundColor = "#ff9999";
});

myButton.addEventListener("mouseout", function() {
  myButton.style.backgroundColor = "#f2f2f2";
});