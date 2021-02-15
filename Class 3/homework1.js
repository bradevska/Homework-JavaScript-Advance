//## Exercise 1
//Create a button
//When the button is clicked, get the data from a given url with an AJAX call. \
//Print the name of the academy in an **h1** tag. \
//Print all student names in an **unordered list**. \
//**URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
//**NOTE:** You need to parse this data before using it.

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

 //Exercise 1

 $(document).ready(function() {
    document.getElementById("request").addEventListener("click",function() {
            $.ajax({
                type:"GET" ,
                url:  "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",  
                success: function(response) {
                    console.log("Request is successfull");
                    let responseObject=JSON.parse(response);
                    console.log(responseObject);
                },
                error: function(response) {
                    console.log("Bad Request");
                }

            })
    });

    function printNameOfAcademy (element,response) {
        let elementDIV= $(element);//("#nameOfAcademy")
        elementDIV.html("");
        //for(let i=0; i<response.academy.length; i++) {
            elementDIV.append(`<h1> ${response.academy} </h1>`);
        //}
    }
    printNameOfAcademy("#nameOfAcademy",response);

    function printNamesOfStudents (element,response) {
        let elementUL=$(element);//("#nameOfStudents")
        elementUL.html("");
        for(let i =0; i<response.studensts.length; i++) {
            elementUL.append( `<ul>  ${response.studensts.length[i]} </ul>`)
        }

    }
    printNamesOfStudents("#nameOfStudents",response);







})