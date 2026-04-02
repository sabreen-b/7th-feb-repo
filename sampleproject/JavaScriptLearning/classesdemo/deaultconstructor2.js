class Student{
    constructor(){
        this.rollno=101
        this.sname="Santosh"
        this.courseName="SCience and Maths"
    }
 
    showStudentName(){
        console.log("Student Name :"+this.sname);
       
    }
 
    showCourseName(){
        console.log("Course Name :"+this.courseName);
       
    }
 
    showRollNo(){
        console.log("Roll Number :"+this.rollno);
       
    }
}
 
let o=new Student()
o.showRollNo()
o.showStudentName()
o.showCourseName()