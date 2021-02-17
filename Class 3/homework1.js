//## Exercise 1
//Create a button
//When the button is clicked, get the data from a given url with an AJAX call. \
//Print the name of the academy in an **h1** tag. \
//Print all student names in an **unordered list**. \
//**URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
//**NOTE:** You need to parse this data before using it.



 //Exercise 1

 $(document).ready(function() {

    function printNameOfAcademy(academy) {
        let element1= $("#nameOfAcademy");
        element1.html="";
        element1.append `Name of academy: ${academy}`
    }

    function printNameOfStudents(response) {
        let element2 =$("#nameOfStudents");
        element2.html="";
        for(let i=0; i < response.students.length; i++) {
            element2.append (`<li> ${response.students[i]}</li>`)
        }
    } 
    //
    document.getElementById("request").addEventListener("click",function() {
            $.ajax({
                method:"GET" ,
                url:  "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",  
                success: function(response) {
                    console.log("Request is successfull");
                    let responseObject=JSON.parse(response);
                    console.log(responseObject);
                    
                    
                    printNameOfAcademy(responseObject);
                    printNameOfStudents(responseObject);  
                            
                },         
                error:function(response){
                    console.log("The request has failed(Bad Request)");
                }

                 
            })
    })

})

//
//primer od cas!!!
//function printElements(response){
    //let element=$("#astros");
   // element.html("");

   // for(let i=0;i<response.people.length;i++){
  //      element.append(`<li>${response.people[i].name}</li>`);
  //  }

//}

//printElements(response);