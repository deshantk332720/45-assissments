//  Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop
//  to print the name of each pizza.

//  • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
// such as I really love pizza!

import inquirer from "inquirer";

let pizza_flavor : string[] = ["veggie","bbq","pepperoni"]

for (let i = 0; i < pizza_flavor.length; i++) {
    console.log( `I like ${pizza_flavor[i]} pizza.`)
    
}

console.log("pizza is one of my favorite foods to enjoy on any occasion.");
console.log("Pizza is such a versatile dish with so many delicious variations.")
 console.log("Whether it's a classic or a gourmet flavor, I can't get enough of it")
console.log("I really love pizza! ")
