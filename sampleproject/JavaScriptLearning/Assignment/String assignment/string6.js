//5) Write a program to verify teh given String is anagram or not
//anagram meaning : two string lenght shd be same and same letters shd be there in word



let s = 'listen'
let t = 'silent'

if (s.length !== t.length)
    console.log("Not anagram");
else
    TocheckChars()


function TocheckChars() {
    let count1 = 0
    let count2 = 0

    for (let i = 0; i <= s.length - 1; i++) {
        for (let j = 0; j <= t.length - 1; j++) {
            if (s[i] === s[j])
                count1++

            if (s[i] === t[j])
                count2++
        }
    }
    if (count1 == count2)
        console.log("anagram");

}


