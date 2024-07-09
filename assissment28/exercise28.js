// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// Set a value for the variable age, and then:
let personage = 1;
if (personage < 2) {
    console.log("A PERSON IS A BABY");
}
else if (personage >= 2 && personage < 4) {
    console.log("PERSON IS A TODDLER");
}
else if (personage >= 4 && personage < 13) {
    console.log("PERSON IS A KID");
}
else if (personage >= 13 && personage < 20) {
    console.log("PERSON IS A TEENAGER");
}
else if (personage >= 20 && personage < 65) {
    console.log("PERSON IS ADULT");
}
else if (personage >= 65) {
    console.log("PERSON IS ELDER");
}
export {};
