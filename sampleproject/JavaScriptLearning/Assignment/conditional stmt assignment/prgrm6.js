//6. Write a program to find number of digits in a given number?

let num = -123;
let count = 0;

while (num > 0) {
    num = (num - (num % 10)) / 10;
    count++; 
}

console.log(count);