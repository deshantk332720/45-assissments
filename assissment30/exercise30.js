// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
let username = [
    "bob",
    "micheal",
    "trevor",
    "franklin",
    "david"
];
for (let i = 0; i < username.length; i++) {
    console.log(`hello,${username[i]},thankyou for logging again`);
}
export {};
