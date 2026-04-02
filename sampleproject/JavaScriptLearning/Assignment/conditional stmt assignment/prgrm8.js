//8. Write a program to display the functionality of each Traffic signal color?
let signal='red'
signal=signal.toUpperCase()
switch(signal){
        case 'RED':
        console.log("Red indicates U shd stop");
        break
        case 'YELLOW':
        console.log("Yellow to prepare to stop");
        break
        case 'GREEN':
        console.log("Green to go");
        break
        default : 
        console.log("invalid signal");
        break
        
}