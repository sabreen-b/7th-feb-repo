/*
c)

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
let pattern=""
let a=1
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattern=pattern+a+" ";
        a++
    }
            pattern=pattern+"\n";

}
console.log(pattern);

/*Using while loop*/
let pattern1=""
let k=1
let b=1
while(k<=5)
{
    let l=1
    while(l<=k){
pattern1=pattern1+" "+b
b++
l++
    }
    k++
    pattern1=pattern1+"\n"
}
console.log(pattern1);

/* Using Do while Loop*/
let pattern2=""
let m=1
let c=1
do{
  let n=1
  do{
pattern2=pattern2+" "+c
n++
c++
  }while(n<=m)

m++
pattern2=pattern2+"\n"
}while(m<=5)
  console.log(pattern2);
