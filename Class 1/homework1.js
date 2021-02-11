//# Exercises 
//## Student constructor function
//* Create a constructor function for Student objects with:
//  * Properties:
//    * firstName
//    * lastName
//    * birthYear
//    * academy 
//    * grades - array of numbers
//    * Methods:
//    * getAge() - returns age of student
//    * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//    * getGradesAverage() - returns the average of the student grades
//    * Create an array with 3 students
//## Student signup
//* Create a form with first name, last name, birth year and academy
//* Create a button for signing up
//* The button should create a new Student object and add it in the array of students


//## Student constructor function
    function Student(fName,lName,birthDate,academy,grades) {
    this.fName=fName,
    this.lName=lName,
    this.birthDate=birthDate,
    this.academy=academy,
    this.grades=grades,

    this.getAge=function() {
        let birthDate=new Date(this.birthDate)
        return new Date().getFullYear()-birthDate.getFullYear();
       
    }
    this.getInfo=function() {
        return ` This is student ${this.fName} ${this.lName} from the academy ${this.academy} `;
            
    },
    this.getGradesAverage=function() {
     
        let sum=0;
        for( let i=0; i<this.grades.lenght; i++) {
            sum += parseInt(this.grades[i],10);
        }
        let average=sum/this.grades.lenght;
        let averageGrade = average.toFixed(2);


        return `Average grade: ${averageGrade}`;//ne mi pecati nemozam da vidam zasto!!!
        
      
    }
  }
 
 let student = [];


 let student1=new Student("Jovan","Jovanov","01-05-1979","SEDEC",[5,8,10,8,7,9]);
 student.push(student1);
 let student2=new Student("Jovana","Jovanova","01-06-1980","SEDEC",[5,6,10,7,10,9]);
 student.push(student2);
 let student3=new Student("Bojan","Ristov","15-12-1985","SEDEC",[6,10,10,10,10,9]);
 student.push(student3);
 
 console.log(student);
 for(let i=0; i<student.lenght; i++) {
    console.log (`${i+1}.${student[i].getInfo()}  /n  ${student[i].getAge()}  /n  ${Student[i].getGradesAverage()}`);
}
 
 
 
// document.getElementById("name").innerHTML=student1.getInfo();
// document.getElementById("age").innerHTML="Age of student is" + " " +student1.getAge();
 
 

 