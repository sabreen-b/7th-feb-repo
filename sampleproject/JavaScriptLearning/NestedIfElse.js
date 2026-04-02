const { log } = require("node:console")

let marks=3655555
if(marks>=70&& marks<=100){
    console.log("The result is 1st class with distinction")
}else
    if(marks<70 && marks>=60){
    console.log("The result is 1st class")
}else
    if(marks<60 && marks>=50){
    console.log("The result is 2nd class with distinction")
}else
    if(marks<50 && marks>=35){
    console.log("The result is 1st class with distinction")
}else 
  if(marks<35 && marks>=0) { 
    console.log("fail")}
    else{
        console.log("Invalid marks ")
    }
    
    
    