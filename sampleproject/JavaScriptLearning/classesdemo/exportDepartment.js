class Dept{
    constructor(dname,dno){
        this.dname=dname
        this.dno=dno
    }
 
    displayDeptName(){
        console.log("Dept Name :"+this.dname);
       
    }
 
    displayDeptNumber(){
        console.log("Dept number:"+this.dno);
       
    }
 
   
}
 
module.exports = {Dept}