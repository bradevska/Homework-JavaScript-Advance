//## Title Generator
//* Create 3 inputs:
//  * Color
//  * FontSize
//  * Text
//* Create a button for generating titles
//* When the button is clicked generate a new h1 element with the color, font size and text from the inputs

  
  let button = document.getElementById("button");
  let colorInput = document.getElementById("color");
  let fontSizeInput = document.getElementById("fontSize");
  let textInput = document.getElementById("text");

button.addEventListener("click",function() {
  
   color = colorInput.value;
   fontSize = Number(fontSizeInput.value);
   text = textInput.value;

    result.innerHTML=`<h1>${text}</h1>`;

    result.style.color=`${color}`;
    result.style.fontSize=`${fontSize}px`
  
 

  clearInputs();//promenlivite bea na lokalno nivo,a treba da se na globalno za funkcijata clearInputs da gi cita

});
function clearInputs() {
    colorInput.value = "";
    fontSizeInput.value = "";
    textInput.value = "";
  }


