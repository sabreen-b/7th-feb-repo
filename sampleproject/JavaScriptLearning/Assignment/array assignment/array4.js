//4. Programmatically assign even numbers from 20 to 40 into an array and read Elements from an Array in reverse order?
let arr=[]

//function to store even numbers
function evenNumbers()
{
    let j=0
    for(let i=20;i<=40;i++)
    {
        if(i%2==0)
        {
            arr[j]=i
            j++
        }
    }
}

let arrayinreverseorder = ()=>{
    for(let k=arr.length-1;k>=0;k--)
    {
        console.log(arr[k])
    }
}

evenNumbers()
arrayinreverseorder()