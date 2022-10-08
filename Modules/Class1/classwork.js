console.log('hello ron')
let myAge
let myName = 'Happy Peace'

myName = 'Laugh Often'
console.log(myName = ${myName})  //myName = Laugh Often 

// store planets name ('earth' , 'mercury', ...)
let planet1 ='Earth';
let planet2 = 'Venus';

Object -> Key-value-pair 

let student1 = {
    name : 'Deepak Sharma',
    state: 'NJ',
    age: 20,
    gender: : 'M', 
    paymentMethod : 'finance',
    anyExperience : true, 
    knownSkills: ['Java', 'Manual testing'.charAt.apply.]}

    let WordOfTheDay = 'King';
    console.log(`${WordOfTheDay}`)

    console.log(${})


    num1 = 10;
    let num4 = num1++
    console.log(um4);  //11 

    create a variabe myTeam and asign many name to your team aka string 
    2. create a variable named myTeamSize and assign any number to it 
    3.Increment the team size by 1
    4. print the result like:
      I am part of ABC team, we have a total of x-members. 

      let MyTeam = 'SoftTechnoDanceTeam';
      let MyTeamSize = 3;
      MyTeamSize++;

      console.log(I am part of ${MyTeam} we have a total of ${myTeam}-members');

      let 

      Good practices to provide names: 
      1. Variables: -> name should relate to the stored value
                    -> cannot use js-keywords (let, var, typeof, console, log, etc...) 
                    cannot use spaces while using variable name. 
                    if name has more than one WordOfTheDay, use camelCaseFormat
                    
    2. Package/Files:
          -> name should relate to the stored content in File/Package
          -> cannot use js-keywords (let, etc. ).


          Lecture 8
Modulus, Increment, Preincrement, Post increment, decrement, 
Comparison Operators (>=, <=, >, <, ===, !==)

populationUSA is equal to populationX ->
myHeight > broHeight

Note: All Comparisons result in Boolean values.

let num1 = 10 
let num2 = 20
let name1 = 'My name'
let name2 = 'your name';

let num1GrEqNum2 = num1 >= num2    // >=   :  greater than or equal to 
console.log(`\n${num1} >= ${num2} = ${num1GrEqNum2}`);

===  :  to compare if two values are equals (in data nd datatype)

==  : to compare if two values are equals (in data) 


let num1 = 10;
let num2 = 20;
let name1 = 'my name';
let name2 = 'your name''

let num1EqNum2 = num1 === num2;
console.log(`\n${num1} === ${name1} = ${num2}`)

myName = 'Ronveer Chakraborty'
console.log(myName)

myHomework = 'Homework 1 - Temperature Conversions'
console.log(myHomework)


conversion1 = 'Fahrenheit to Celsius'
console.log(conversion1)

// F -> C
// T(C°) = (T (F°)) - 32/1.8

let fTemp1 = 60;
let cTemp1 = parseFloat((fTemp1 - 32)/1.8).toFixed(2)
console.log(`${fTemp1}°F is equals to ${cTemp1}°C`)



conversion2 = 'Fahrenheit to Kelvin'
console.log(conversion2)

// F -> K
// T(K°) = (T(°F) + 459.67) * 5/9

let fTemp2 = 82;
let kTemp1 = parseFloat((fTemp2 + 459.67) * 5/9).toFixed(2)
console.log(`${fTemp2}°F is equals to ${kTemp1}°K`)



conversion3 = 'Celsius to Fahrenheit'
console.log(conversion3)

// C -> F
// T(°F) = (T(°C) * 1.8 + 32)

let cTemp2 = 70;
let fTemp3 = parseFloat(cTemp2 * 1.8 + 32).toFixed(2)
console.log(`${cTemp2}°C is equals to ${fTemp3}°F`)




conversion4 = 'Celsius to Kelvin'
console.log(conversion4)

// C -> K
// T(°K) = T(°C) + 273.15

let cTemp3 = 4
let kTemp2 = parseFloat(cTemp3 + 273.15).toFixed(2)
console.log(`${cTemp3}°C is equals to ${kTemp2}°K`)



conversion5 = 'Kelvin to Fahrenheit'
console.log(conversion5)

// K -> F
// T(°F) = T(°K) * 9/5 - 459.67

let kTemp3 = 300
let fTemp4 = parseFloat(kTemp3 * 9/5 - 459.67).toFixed(2)
console.log(`${kTemp3}°K is equals to ${fTemp4}°F`)



conversion6 = 'Kelvin to Celsius'
console.log(conversion6)

// K -> C
// T(°C) = T(°K) - 273.15

let kTemp4 = 250
let cTemp4 = parseFloat(kTemp4 - 273.15).toFixed(2)
console.log(`${kTemp4}°K is equals to ${cTemp4}°C`)


discussed string fxs

To find if the String starts with exact given patern: startsWith()
input: 1
string 
return type boolean 

let abc ='hello dear how are you?'
let def = 'hello d'

let myCityStartsWith_He = myCity.startsWith('He');
console.log(`does myCity start with 'He' -> ${myCityStrtsWith_hello_de}`);


Find if string starts with a pattern (ignoring the cases) 

Let myCity = 'neW yORk CIty, neW YoRk';

let fullName = '';
let fullNameLowerCase = fullName.toLowerCase();
Let varNum = fullNameLowerCase.length > 14 && fullNameLowerCase.includes('els') ? 23 : 32'