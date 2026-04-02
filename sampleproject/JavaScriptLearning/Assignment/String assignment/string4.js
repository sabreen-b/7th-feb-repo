//3) If a given string is "asd12pqr10xyz5def15mnp" find sum of all integers
let s='asd12pqr10xyz5def15mnp'
let sum=0
for( let i=0;i<s.length-1;i++)
{
    if(s.charAt(i)>0 && s.charAt(i)<=9)
{
    sum=sum * 10+s.charAt(i)
}
}
console.log(sum);
