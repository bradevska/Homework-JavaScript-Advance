//## Student signup
//* Create a form with first name, last name, birth year and academy
//* Create a button for signing up
//* The button should create a new Student object and add it in the array of students

function Student(fName,lName,studentYear,studentAcademy) {
    this.firstName=fName,
    this.lastName=lName,
    this.birthYear=studentYear,
    this.academy=studentAcademy,
    this.getInfo=function() {
        return `Student: ${this.firstName} ${this.lastName} ${this.birthYear} ${this.academy}`
    };
}

let students=[];

let buttonSignUp=document.getElementById("signUp");
let message=document.getElementById("message");
let result=document.getElementById("result");

let inputFirstName=document.getElementById("fName");
let inputLastName=document.getElementById("lName");
let inputBirthYear=document.getElementById("studentYear");
let inputAcademy=document.getElementById("studentAcademy");

buttonSignUp.addEventListener("click",function(){
    let firstName=inputFirstName.value;
    let lastName=inputLastName.value;
    let birthYear=inputBirthYear.value;
    let academy=inputAcademy.value;
     
        if (!firstName || !lastName || !birthYear || !academy) {
            alert("Please enter corect value",message);
        } else {
            let student=new Student(firstName,lastName,birthYear,academy);
            students.push(student);
            printStudents(students,result);
            clearForm();

            console.log(students);
        }
});

function printStudents(students,element) {
    element.innerHTML=``;
    let html="";
    for (let i=0; i<students.length; i++) {
        html +=`<p> ${(i+1)}.${students[i].getInfo()}</p>`;
    }
     
    element.innerHTML=html;
}       

function clearForm() {
    inputFirstName.value = "";
    inputLastName.value ="";
    inputBirthYear.value="";
    inputAcademy.value ="";
}

function showMessage(message,element) {
    element.innerHTML="";
    element.innerHTML=`<p>${message}</p>`
}