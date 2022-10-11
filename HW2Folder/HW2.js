myName = 'Ronveer Chakraborty'
console.log(myName)

myHomework = 'Homework # 2'
console.log(myHomework)



const sentence1 = 'Hello Dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 */


result1 = sentence1.length >= 10 ? 15 : 10;
console.log(`\n\nresult1 -> ${result1}`);



const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */


let sentence2replaceAllatoAlpha = sentence2.replace(/a/ig, 'Alpha')
console.log(`\n\nsentence2replaceAllatoAlpha -> ${sentence2replaceAllatoAlpha}`)

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";


let sentence3length = sentence3.length
console.log(`\n\nsentence3length -> ${sentence3length}`)

does sentence-3 starts with 'HeaLTh' ignore cases

let sentence3tolowerCase = sentence3.toLowerCase()
let pattern_lowerCase = 'HeaLTh'.toLowerCase
let senetnce3startsWith_HeaLTh = sentence3toLowerCase.startsWith(pattern_lowerCase)
console.log(`\n\nsentence3startsWith_HeaLth -> ${sentence3startsWith_HeaLTh}`)

 does sentence-3 contains with Body ignore cases

let pattern_lowerCaseBody = 'Body'.toLowerCase();
let sentence3includes_Body = sentence3tolowerCase.includes(pattern_lowerCaseBody)
console.log(`\n\nsentence3includes_Body -> ${sentence3includes_Body}`)

4 index of BoDy in sentence3  ignore cases
let indexOf_BodyInSentence3 = sentence3toLowerCase.indexOf(pattern_lowerCaseBody)
console.log(`\n\nsentence3includes_Body -> ${indexOf_BodyInSentence3}`)

5 First find length 
Last index is length -1 
find character at index 


let charAt_70 = sentence3.charAt(70);
console.log(`\n\ncharAt_70 -> ${charAt_70}`)


let lastIndex = sentence3.length-1 
let charAtLastIndex = sentence3.charAt(sentence3.length-1)
console.log(`\n\nCharAtLastIndex -> ${sentence3.length-1}`)

*6. Body is present only once (true or false) 
convert sentence3 in to to lower case 
convert body in to lowercase 
find index of body 
find last index of body 
compare index of value === last index of - value and index of value >= 0 



