// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

import inquirer from "inquirer";

let carnames :string[]=[
   "lamborgini sian",
    "nissanGTR",
    "toyota",
]

for (let i=0 ; i < carnames.length ; i++){
    console.log("I Like To Own",carnames[i],"car");
}


     