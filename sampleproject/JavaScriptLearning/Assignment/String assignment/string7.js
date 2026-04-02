//6) The given String is "SUNDAYMONDAYTUESDAYWEDNESDAYTHURSDAYFRIDAYSATURDAY"
//(a) write a program to insert comm(,) after each occurrence of DAY
let s = "SUNDAYMONDAYTUESDAYWEDNESDAYTHURSDAYFRIDAYSATURDAY"
let result = ""

for (let i = 0; i < s.length; i++) {

    result = result + s[i]

    if (s[i] == 'Y' && s[i-1] == 'A' && s[i-2] == 'D') {
        result = result + ","
    }

}

console.log("string without adding , is " + s)
console.log("string added , is " + result)