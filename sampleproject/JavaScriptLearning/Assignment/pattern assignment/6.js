/*f)
 
1
1 1
1 1 1
1 1 1 1
1 1 1 1 1
*/

let pattern=""
let a=1
for(let i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        pattern=pattern+" "+a
    }
    pattern=pattern+"\n"
}
console.log(pattern);
