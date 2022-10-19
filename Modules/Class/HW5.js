// 1. Find the average of the given number-array//

let num = [23, 12, 43, 10, 5, -10]

let totalNum = 0

for (i = 0; i < num.length; i++ ) {
    totalNum = totalNum += num[i]
    averageNum = totalNum / num.length
}
    console.log(`The average of given numbers is -> ${parseFloat(averageNum).toFixed(2)}`)





//* 2. Reverse a given string//


let str2 = 'have a great day' 
 
let arrstr2 = str2.split(' ')
let reverseStr2 = ''

for (i = arrstr2.length - 1; i >= 0; i--) { 
    reverseStr2 = reverseStr2 += arrstr2[i] + ' '
}

console.log(`reverseStr2 -> ${reverseStr2}\n\n`)


//3. Create abbreviation for a sentence//

let str3 = 'good Morning'
 let abbr = ''

 let str3UpCs_split = str3.toUpperCase().split(' ')
 console.log(str3UpCs_split)
 

 for (let i = 0; i < str3UpCs_split.length; i++) {
    abbr = abbr += str3UpCs_split[i].charAt(0)
 }
  console.log(`Abbreviation of str3 -> ${abbr}`)
 

let abbreviation = str3.toUpperCase().split(" ").map(element => element[0]).join('')
console.log(`\n\n Abbreviation in one line -> ${abbreviation}\n\n`)