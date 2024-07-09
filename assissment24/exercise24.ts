//More Conditional Tests: You don’t have to limit 
// the number of tests you create to 10. If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

import inquirer from "inquirer";
console.log("------------------------------------------------")

let car = "fortuner"
console.log(car == 'toyota')
console.log(car=='fortuner')

console.log("-------------------------------------------------")

let string1="foot"
let string2="ball"

console.log(string1 === string2)
console.log(string1 !== string2)

console.log('---------------------------------------------------')

let name ="NAWAZ SHARIF"
console.log(name.toLowerCase())
console.log(name.toLowerCase() !== name)

console.log("---------------------------------------------------")

let num1 = 1.5
let num2 = 2

console.log(num1 === num2)
console.log(num1 != num2)

console.log(num1 > num2)
console.log(num1 < num2)

console.log(num1 >= num2)
console.log(num1 <= num2)

console.log("----------------------------------------------------")

let x = 10
let y = 20 
let z = 30

console.log (x > y)
console.log(x > y || y < z && y != x)

console.log("------------------------------------------------------")

let array1 : number[] = [1,2,3,4,5,6,7,]
let item : number = 3;

console.log(array1.indexOf(item) !== -1)

console.log("--------------------------------------------------------")

let array2 :number []=[1,2,3,4,5,6,7,8]
console.log(array2.indexOf(10) === -1);

