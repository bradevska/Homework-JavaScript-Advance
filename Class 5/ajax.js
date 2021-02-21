//Ajax

//Homework

//## Exercise 1
//There is a JSON file with students. Make a call to the file and get the following data from it: 
//* All students with an average grade higher than 3
//* All female student names with an average grade of 5
//* All male student full names who live in Skopje and are over 18 years old
//* The average grades of all female students over the age  of 24
//* All male students with a name starting with B and average grade over 2

//Use higher order functions to find the answers
//**Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json


$(document).ready(function(){
    
    document.getElementById("request").addEventListener("click",function() {
       $.ajax({
             url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success: function(response) {
               console.log("Request is successfull");
                let responseObject=JSON.parse(response);
                console.log(responseObject);



               

            },

             error: function(response) {
                 console.log("bad request")
             }
            
       
        })



    })

})

//* All students with an average grade higher than 3

//function averageHigherThan3 (student) {
  //  return student.averageGrade > 3
//};

//let averageAbove3 = students.filter(averageHigherThan3);
//console.log(averageAbove3);

//or:

//let averageGradeAbove3 = students.filter(student => student.averageGrade > 3);
//console.log(averageGradeAbove3);