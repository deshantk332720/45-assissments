// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. 
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}
make_shirt();
make_shirt("large");
make_shirt("Small", "Keep calm and code on.");
export {};
