class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x + y));
       
    }
}
 
class Maths2 extends Maths1{
    substraction(x,y){
        console.log("Substraction Result :"+(x - y));
       
    }
}
 
let o1=new Maths2()
o1.addition(20,40)
o1.substraction(100,30)