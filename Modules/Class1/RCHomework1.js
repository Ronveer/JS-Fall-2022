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