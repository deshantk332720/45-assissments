// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain 
// fruits in your array.
         
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

import inquirer from "inquirer";

let favorite_fruits : string[]=["mango",
                                "apple",
                                 "kiwi"]

  if (favorite_fruits.includes("mango")){
    console.log("I REALLY LIKE MANGOES")
  }   
  
  if (favorite_fruits.includes("apple")){
    console.log("I REALLY LIKE APPLES")
  }
 if (favorite_fruits.includes("kiwi")){
    console.log("I LIKE KIWI")
 }
 if (favorite_fruits.includes("grape")){
    console.log("I REALLY LIKE GRAPES")
 }