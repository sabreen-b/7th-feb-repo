/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
/*Using For loop*/
let pattern=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattern=pattern+" "+j

    }
    pattern=pattern+"\n"
}
console.log(pattern);

/*Using while loop*/
let pattern1=""
let k=1
while(k<=5)
{
    let l=1
    while(l<=k){
pattern1=pattern1+" "+l
l++
    }
    k++
    pattern1=pattern1+"\n"
}
console.log(pattern1);

/*Using Do while loop*/
let pattern2=""
let m=1

do{
    let n=1
    do{
pattern2=pattern2+" "+n
n++

    }while(n<=m)
pattern2=pattern2+"\n"
m++
}while(m<=5)

console.log(pattern2);


