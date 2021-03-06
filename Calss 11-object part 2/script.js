//## Exercise 1
//Create a Person constructor function that has:
//* firstName
//* lastName
//* age
//* getFullName - method

//Create a Student constructor function that inherits from Person and has:
//* academyName
//* studentId
//* study - method that writes in the console: The student firstName is studying in the academyName

//Create two Student objects

function Person(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Student(firstName,lastName,age,academyName,studentId) {
    Object.setPrototypeOf(this, new Person(firstName,lastName,age));
    this.academyName = academyName;
    this.studentId = studentId ;
    this.study = function() {
        console.log(`The student ${this.firstName} ${this.firstName} is studying in the ${this.academyName}`);
    }
    //Create a method on the Student prototype that accepts a 
    //Student of any academy and returns the academy that that student is in.
    this.studentsOfAnyAcademy = function() {
        if(student1.academyName !== "" ) {
            console.log(`Student ${this.firstName} is from academy of ${this.academyName}`)
        } else {
            console.log("Enter correct Academy Name")
        }
    }
}

let student1 = new Student("Biba", "Radevska" ,35, "FINKI", 1);
console.log(student1);
let student2 = new Student("Vesna", "Minovska", 28, "SEDEC", 5);
console.log(student2);
console.log(student1.academyName);
console.log(student2.academyName);


//## Exercise 2
//Create a method on the Student prototype that accepts a 
//Student of any academy and returns the academy that that student is in.


//Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

//#### DesignStudent
//* isStudentOfTheMonth - boolean
//* attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

function DesignStudent(firstName,lastName,age,academyName,studentId,studentOfTheMonth) {
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,academyName,studentId));
    this.studentOfTheMonth = studentOfTheMonth;
    this.attendAddobeExam = function() {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

let student3= new DesignStudent("Goran","Janevski", 23, "Finki", 7, true);
console.log(student3);
student3.attendAddobeExam();


//#### CodeStudent
//* hasIndividualProject - boolean
//* hasGroupProject - boolean
//* doProject(type) - method that accepts string. If the string is 
//individual or group it should write that the person is working on the 
//project of that type and set the value to true on the property of the project

function CodeStudent(firstName,lastName,age,academyName,studentId,individualProject,groupProject) {
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,academyName,studentId));
    this.individualProject = individualProject;
    this.groupProject = groupProject;
    this.doProject = function() {
       if(individualProject === this.individualProject && individualProject !== "") {
           console.log(`The ${this.firstName} working on individual project ${this.individualProject}`);
       }else {
           console.log(`The ${this.firstName} working on group project ${this.groupProject}`);
       }
       

    }
}

let student4 = new CodeStudent("Sofija", "Blazevska", 25, "SEDEC", 5, "", "Star Wors app")
console.log(student4);
student4.doProject();


//#### NetworkStudent
//* academyPart - number
//* attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

function NetworkStudent(firstName,lastName,age,academyName,studentId,academyPart) {
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,academyName,studentId));
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`The student ${this.firstName} is doing a cisco exam`);
    }
}

let student5 = new NetworkStudent("Zoran", "Kimovski", 22, "SEDEC", 28, 1);
console.log(student5);
student5.attendCiscoExam();

//**Note:** For all students, the academyName property 
//should be auto generated based on which Student we are creating 
//( design, code or network )




//Ova posldnovo ne mi e jasno sto se bara!!!!!!!!!!!!!!!!!
//Create one of each students
//Check all students with the Student method for checking students academy
function AllStudents(firstName,lastName,age,academyName,studentId) {
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,academyName,studentId));
    this.studentsChecking = function(){
        console.log(`${this.academyName}`)
    }

}
let all = new AllStudents("Sofija", "Lazarova",25,"Sedec", 5);
all.studentsChecking();

student1.studentsOfAnyAcademy();
student2.studentsOfAnyAcademy();


//Првото барање е исполнето, 
//а второто барање е соодветно да се врати студентот во 
//која академија членува со методата од темплејтот 
//Student(ова треба да се доработи). Од делот кој што не ти е јасно што да се доработи.