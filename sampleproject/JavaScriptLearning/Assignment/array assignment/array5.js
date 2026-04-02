//5. Programmatically assign odd numbers from 71 to 51 into an array and read Elements from an Array in reverse order?

let arr=[]

//function to store odd numbers
function oddNumbers()
{
    let j=0
    for(let i=71;i>=51;i--)
    {
        if(i%2!==0)
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

oddNumbers()
arrayinreverseorder()