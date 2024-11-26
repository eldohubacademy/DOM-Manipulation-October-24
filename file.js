// methods used to access elements/ an element
/**
 * getElementById("")
 * getElementsByClassName("")
 * getElementsByTagName("")
 * querySelector("#smth") //
 * querySelectorAll(".smth")
 */

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const countEl = document.querySelector("span");
// plusButton.setAttribute("class", "btn")
plusButton.addEventListener("click", () => {
  let numberValue = parseInt(countEl.textContent);
  if (isNaN(numberValue)) {
    alert("Span content is not a number");
  } else {
    numberValue++;
    countEl.textContent = numberValue;
  }
});

// minus action
minusButton.addEventListener("click", () => {
  let numberValue = parseInt(countEl.textContent);
  if (isNaN(numberValue)) {
    alert("can not subtract from a string");
  } else {
    numberValue--;
    countEl.textContent = numberValue;
  }
});

// create a button that when clicked, it wll change the background color of the body of page to a rondom color from a list(array) of colors

const colors = ["red", "beige", "gray", "pink", "yellowgreen", "orange"];

document.querySelector("#change-color").addEventListener("click", () => {
  const randomIndex = Math.round(Math.random() * colors.length);

  document.querySelector("body").style.backgroundColor = colors[randomIndex];
});

// notification el

const notificationDiv = document.getElementById("notification");
const closeBtn = document.getElementById("close-notification");

closeBtn.addEventListener("click", () => {
  notificationDiv.remove();
});

// build a mobile nav meno  --- style.display == block/none

// traversing the DOM --
// event propagation and other events

// frontend mentor project
