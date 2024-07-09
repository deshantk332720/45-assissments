// Checking Usernames: Do the following to create a program that simulates how websites ensurethat everyone has a unique
//  username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
// the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the 
// person will need to enter a new username. If a username has not been used, print a message saying
//  that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


import inquirer from "inquirer";

let current_users : string [] = [
    "john",
    "david",
    "umer",
    "anus"
]

let  new_users : string [] =[
    "david",
    "anus",
    "JOHN",
    "lester",
    "lamar"
]




new_users.forEach((newOneUser=>
    {
        let ourCondition=current_users.some(currentNewOne=>currentNewOne.toLowerCase()===newOneUser.toLowerCase());
        if (ourCondition){
            console.log(`This ${newOneUser} is already avalaible in current user Please enter new user name  `)
        } else{console.log(`This ${newOneUser} is avalaible`)
    }

}))
new_users.forEach((newOneUser=>
    {
        let ourCondition=current_users.some(currentNewOne=>currentNewOne.toLowerCase()===newOneUser.toLowerCase());
        if (ourCondition){
            console.log(`This ${newOneUser} is already avalaible in current user Please enter new user name  `)
        } else{console.log(`This ${newOneUser} is avalaible`)
    }

}))



