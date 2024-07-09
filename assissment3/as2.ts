import inquirer from "inquirer";

let personName:string = "deshant kumar "

// in lowercase

let lowerCase = personName.toLowerCase()

console.log(lowerCase)

// in uppercase

let upperCase = personName.toUpperCase()

console.log(upperCase)

// in titlecase

let titleCase = personName.split("");
 console.log(titleCase)
 for (let i=0; i<personName.length;i++){
    titleCase += personName[i].charAt(0).toUpperCase
 }