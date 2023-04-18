document.querySelector("#butFlip").addEventListener("click", flip);
document.querySelector("#colorName");

function flip() {
  let colorArray = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Cyan",
    "Purple",
    "Pink",
    "White",
    "Gray",
    "Brown",
  ];
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  document.querySelector("#colorName").innerHTML = randomColor;
  document.querySelector("#flipBody").style.backgroundColor = randomColor;
}
