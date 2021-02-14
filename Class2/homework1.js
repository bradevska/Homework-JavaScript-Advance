//## Title Generator
//* Create 3 inputs:
//  * Color
//  * FontSize
//  * Text
//* Create a button for generating titles
//* When the button is clicked generate a new h1 element with the color, font size and text from the inputs

  
  let button = document.getElementById("button");

button.addEventListener("click",function() {
  
  let colorInput = document.getElementById("color").value;
  let fontSizeInput = document.getElementById("fontSize").value;
  let textInput = document.getElementById("text").value;
  document.getElementById("headerText").style.color=colorInput;
  document.getElementById("headerText").style.fontSize=`${fontSizeInput}px`
  document.getElementById("headerText").innerHTML = textInput;

  clearInputs();//ova sakav da go primenam ali vaka ispisan kodot ne mi funkcionira
});

function clearInputs() {
    colorInput.value = "";
    fontSizeInput.value = "";
    textInput.value = "";
  }

