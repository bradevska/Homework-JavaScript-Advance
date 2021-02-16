//Create an HTML document with two inputs, a button and an h1 header with some text. 
//The first input should be for text size and the second for color.
// When the button is clicked the h1 header should change according to the input values 
// ( change size as the first input value and color as the second input value ).
// Use the functions that we declared earlier and use arrow function for the event 
// listener of the button. 





let clickButton=document.getElementById("clickBttn");
let inputTextSize=document.getElementById("textSize");
let inputColor=document.getElementById("color");

clickButton.addEventListener("click",() =>{
    let textSize=inputTextSize.value;
    let color=inputColor.value;

    if((textSize !== "") && (color !== "")) {
        header.style.fontSize = `${textSize}px`;
        header.style.color = `${color}`;
    } else {
        alert("Please enter valid  Color and TextSize");
    }
 
    //clearInputs();

});

let clearInputs = () => {
    inputTextSize.value = "";
    inputColor.value = "";
}

 