//prime num   
let num=50
count=0
for(let i=2;i<=num;i++)
{
    if(num%i==0){
        count++
    }
    
}
if(count==2)
{
    console.log("its prime num");
    
}
else 
    console.log("its not prime num");
    