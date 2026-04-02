/*
   variabel scope
   var -> functional level
   let  --> block level
   const  -> block level
*/
 
function show(){
    if(true){
        var x="Welcome"
        console.log("Inside If block :"+x);  
    }
    console.log("Inside Function :"+x);  
}
show();

function show1(){
    if(true){
        let x="Welcome"
        console.log("Inside If block :"+x);  
    }
    console.log("Inside Function :"+x);  
}
show1();

function show2(){
    if(true){
        const x="Welcome"
        console.log("Inside If block :"+x);  
    }
    console.log("Inside Function :"+x);  
}
show2();