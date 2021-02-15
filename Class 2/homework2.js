//## List Generator
//* Create 3 inputs:
//  * Color
//  * FontSize
//  * Items
//* Create a button for generating unordered lists
//* When the button is clicked generate a new ul element with the color, font size and items from the inputs 
//  Items should be added separated by , in the input

let ul=document.getElementById("result");
let button=document.getElementById("button");
let colorInput=document.getElementById("color");
let fontSizeInput=document.getElementById("fontSize");
let itemsInput=document.getElementById("items");

button.addEventListener("click",function() {
 
    let color=colorInput.value;
    let fontSize=Number(fontSizeInput.value);
    let items=itemsInput.value;
    let array=items.split(",");//ova ne mi funkcionira
   

    function addItems(array) {
        for (let i=0; i<array.length; i++) {
            ul.innerHTML +=`<li> ${array[i]}</li>`
            
        }
    }
    addItems(array);

    ul.style.color=`${color}`;
    ul.style.fontSize=`${fontSize}px`

    clearInputs();//ovde mi funkcionira ali koga ke dodadam naredni podatoci
    //vo druga boja i drugi px i prethodnite gi prevzemaat istite podatoci:)...da ne 
    //treba negde break da se napravi:)
    

});

 function clearInputs() {
     colorInput.value=" ";
     fontSizeInput.value=" ";
     itemsInput.value=" ";
 }

 //I vo dvete domasni sakav if else statementi da primenam ali neznaev kako..
 //izgleda ne gi razbiram bas.(koga stanuva za broevi znam da gi primenam).
 //Vo dvete domasni neli treba demek ako vo inputite se vnese razlicno od text 
 //ili razlicno od brojka...