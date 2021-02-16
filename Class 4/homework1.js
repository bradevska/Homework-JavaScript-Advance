//Create 2 variables with arrow functions.
//1. First arrow function will accept two parameters, one for element and one for color. 
//The function should change the given element text color with the color given from the 
//second color parameter. 
//If no parameter is passed for color, the default value is **black**.
//2. Second arrow function will accept two parameters, one for element and one for textSize. 
//The function should change the given element text size to the number given from the second
// textSize parameter. 
//If no parameter is passed for textSize, the default value is 24.

let element1=document.getElementById("element1");
 
 let firstArrowFunction=(element,color) => {
     if (color !=="") {
         element1.style.color=`${color}`;

     }else {
         element1.style.color="black"
     }

 }
 firstArrowFunction(element1,"blue");
 //firstArrowFunction(element,"");

 let element2=document.getElementById("element2");

 let secondArrowFunction=(element,textsize) => {
     
     if(textsize ==""){
        element2.style.fontSize="24px";
     }else {
        element2.style.fontSize=`${textsize}.px`
     }
 };
  secondArrowFunction(element2,55);
  //secondArrowFunction(element2,"");


  



