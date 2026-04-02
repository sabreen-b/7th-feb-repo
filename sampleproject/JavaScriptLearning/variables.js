//Variables:
//Variables are used to store the value, the value stored in a variable can change only during run time.
 
//Example:
var x=100
console.log(x);
x="Good Morning"
console.log(x);
x=true
console.log(x);
 
//How to declare variables?
//Variables can be declared var, let, const
 
//var -> If we redeclare variables using var keyword, it accepts.
var x=100
console.log(x);
var x="Good Morning"
console.log(x);
var x=true
console.log(x);
 
// let -> It does not allow to redeclare the variables
 
let x1=100
console.log(x1);
let x2="Good Morning"
console.log(x2);
let x3=true
console.log(x3);
 
// const -> It does not allow to reassign the value.
const x=200
console.log(x);
 

 
// It provides error message since we can't assign value to const variables.
 