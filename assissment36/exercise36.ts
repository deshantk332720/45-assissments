// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on
//  the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.

import inquirer from "inquirer";



function make_shirt(size: string, message: string){
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
  }
  
  
  make_shirt("Medium", "Hello World!");
  make_shirt("Large", "TypeScript is awesome!");
  make_shirt("Small", "Keep calm and code on.")

  
    
  