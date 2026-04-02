//4) Write a program to verify the given string is palindrome or not
let s='MOM'
let t=''
function reverseString(){
for(let i=0;i<=s.length-1;i++)
{

t=t+s.charAt(i)

}
console.log("reversed string ="+t);
}
reverseString()

function stringPalindrome(){
if(t==s)
    console.log("palindrome string");
    else
        console.log("not palindrome");
        
}

stringPalindrome()

