// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each
//  magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magician) {
    for (let i = 0; i < show_magicians.length; i++) {
        console.log(magician[i]);
    }
}
let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great("magicianNames");
export {};
