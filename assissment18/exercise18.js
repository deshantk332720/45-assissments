// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.done
let places = ["Uganda", "Hongkong", "Southkorea", "England", "India"];
// ----------------------------- ----------------------------- -------------
console.log(places);
// ----------------------------- ----------------------------- -------------
console.log("In alphabetical order", places.slice().sort());
// ---------------------------- ----------------------------- --------------
console.log("oringinal order", places);
// ---------------------------- ----------------------------- --------------
console.log("reverse method", places.slice().sort().reverse());
// ---------------------------- ----------------------------- --------------
console.log(places);
// ---------------------------- ----------------------------- --------------
console.log("reversed change");
places.reverse();
console.log(places);
// --------------------------- ------------------------------ --------------
console.log("original", places.sort());
console.log(places);
// -------------------------- ------------------------------- --------------
console.log("In alphabetical order", places.slice().sort());
console.log(places);
// ------------------------- -------------------------------- --------------           
console.log("reverse method", places.sort().reverse());
console.log(places);
export {};
