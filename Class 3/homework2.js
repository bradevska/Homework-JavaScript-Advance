//## Exercise 2
//Create a button
//When the button is clicked, call the StarWars api for the first person. \
//Print the person name in an **h1** tag. \
//Print the person stats in a **table**:
//* Height
//* Weight
//* Eye color
//* Hair color

//**URL:** https://swapi.dev/api/people/1 \
//**NOTE:** JQuery will autmatically parse this call (js will not).

//Exercise 2


$(document).ready(function(){
    document.getElementById("request").addEventListener("click",function(){
        $.ajax({
            method:"GET",
            url: "https://swapi.dev/api/people/1",
            success: function(response) {
                console.log(response);

                let element1=document.getElementById("personName");
                element1.innerHTML="";
                element1.innerHTML += (`${response.name}`);

                let element2= document.getElementById("personStats");
                element2.innerHTML="";
                element2.innerHTML += (`<table border="2px">

                <tr>
                <td>Height</td>
                <td>Mass</td>
                <td>Hair color</td> 
                <td>Eye color</td>
                </tr>

                <tr>
                <td>${response.height}</td>
                <td>${response.mass}</td>
                <td>${response.hair_color}</td> 
                <td>${response.eye_color}</td>
                </tr>;
                </table>`);

            },
            error: function(response){
                console.log("Bad request");
            }
        })




    })










})


