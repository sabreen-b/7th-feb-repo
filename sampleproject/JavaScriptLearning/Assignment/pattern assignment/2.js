/*b)
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
/*Using For loop*/

let pattern=""
for(let i=5;i>=1;i--)
{
    for(let j=1;j<=i;j++)
       {
         pattern=pattern+" "+j

       }
       pattern=pattern+"\n"
}
console.log(pattern);

/*Using while loop*/
let pattern1=""
let k=5
while(k>=1)
{
    let l=1
    while(l<=k){
pattern1=pattern1+" "+l
l++
    }
    k--
    pattern1=pattern1+"\n"
}
console.log(pattern1);

/* Using Do while Loop*/
let pattern2=""
let m=5
do{
  let n=1
  do{
pattern2=pattern2+" "+n
n++

  }while(n<=m)

m--
pattern2=pattern2+"\n"
}while(m>=1)
  console.log(pattern2);
  
