/*2) if a given String is "PROGRAM" design the below pattern
(a)
P
P R
P R O
P R O G
P R O G R
P R O G R A
P R O G R A M  */

let s='PROGRAM'

let pattern=""
 
for(let i=0;i<=s.length-1;i++){
    for(let j=0;j<=i;j++){
        pattern=pattern+s.charAt(j)+' '
       
    }
    pattern=pattern+"\n"
}
 
console.log(pattern);