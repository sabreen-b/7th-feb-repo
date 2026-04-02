/*d)

A
B C
D E F 
G H I J
K L M N O */
/* Using For loop */
let pattern=""
let a=65
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++){
        pattern=pattern+String.fromCharCode(a)+" "
        a++
    }
    pattern+="\n"
}
console.log(pattern);

/*Using while loop*/
let pattern1=""
let b=65
let k=1
while(k<=5)
{
    let l=1
    while(l<=k){
pattern1=pattern1+" "+String.fromCharCode(b)
l++
b++
    }
    k++
    pattern1=pattern1+"\n"
}
console.log(pattern1);

/* Using Do while Loop*/
let pattern2=""
let c=65
let m=1
do{
  let n=1
  do{
pattern2=pattern2+" "+String.fromCharCode(c)
n++
c++

  }while(n<=m)

m++
pattern2=pattern2+"\n"
}while(m<=5)
  console.log(pattern2);
