// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the 
//  Great added to each magician’s name.

import inquirer from "inquirer";

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
  function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
  }

  let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

  console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("Great Magicians:");

show_magicians(magicianNames);