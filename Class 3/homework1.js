//## Exercise 1
//Create a button
//When the button is clicked, get the data from a given url with an AJAX call. \
//Print the name of the academy in an **h1** tag. \
//Print all student names in an **unordered list**. \
//**URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
//**NOTE:** You need to parse this data before using it.


 //Exercise 1

 $(document).ready(function() {
    document.getElementById("request").addEventListener("click",function() {
            $.ajax({
                method:"GET" ,
                url:  "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",  
                success: function(response) {
                    console.log("Request is successfull");
                    let responseObject=JSON.parse(response);
                    console.log(responseObject);
                },
                error: function (response) {
                    console.log("Bad Request");
            }

        
        })

            
    });
    

    function printNameOfAcademy (response) {
        let element= $("#nameOfAcademy");//("#nameOfAcademy")
        element.html("");
        
         element.append(`<h1> ${response.academy.name} </h1>`);
        
    }
     printNameOfAcademy(response);


     function printNameOfStudents (element,respons) {
         let list=$("nameOfStudents");
         list.innerHTML="";
         for( let i=0;i<students.length; i++) {
             list.append(`<li> ${response.students[i].name}</li>`);
         }
     
        }
    
    printNameOfStudents("#nameOfStudents",response);
    




    });