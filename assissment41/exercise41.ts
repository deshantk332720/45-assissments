// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

import inquirer from "inquirer";

let magician_name : string [] =[
    "motu",
    "doraemon",
]

function show_magiciansmagician(name : string[]){
    name.forEach(name =>{
    console.log(name)
    })
}

show_magiciansmagician(magician_name);