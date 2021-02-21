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


//* All students with an average grade higher than 3

function averageHigherThan3 (student) {
    return student.averageGrade > 3
};

let averageAbove3 = students.filter(averageHigherThan3);
console.log(averageAbove3);

//or:

let averageGradeAbove3 = students.filter(student => student.averageGrade > 3);
console.log(averageGradeAbove3);






//* All female student names with an average grade of 5"gender":"Female

let femaleStudentsGrade5 = students
.filter(student => student.gender === "Female")
.filter(student => student.averageGrade === 5)
.filter(student => student.firstName);

femaleStudentsGrade5.map(student=>
  console.log(`${student.firstName} Gender: ${student.gender} Average: ${student.averageGrade}`));






//* All male student full names who live in Skopje and are over 18 years old  

let maleStudentsOver18=students
.filter(student =>student.gender === "Male" )
.filter(student =>student.city ==="Skopje")
.filter(student => student.age > 18);


maleStudentsOver18.map (student =>
  console.log(`${student.firstName} ${student.lastName} Gender: ${student.gender} ${student.city} ${student.age}`));





//* The average grades of all female students over the age  of  24  

let femaleStudentsAgeOver24 = students
  .filter(student => student.gender === "Female")
  .filter(student => student.age > 24);

  femaleStudentsAgeOver24.map(student =>
    console.log(`Gender: ${student.gender} Age: ${student.age} Average grade:  ${student.averageGrade}`));





//* All male students with a name starting with B and average grade over 2

let maleStudentsStartNameWithB = students
  .filter(student => student.gender === "Male")
  .filter(student => student.averageGrade > 2)
  .filter(student => student.firstName.startsWith("B"));

  maleStudentsStartNameWithB.map(student =>
    console.log(`${student.gender} ${student.averageGrade} ${student.firstName}`));
 
 




    
    
    


 

  