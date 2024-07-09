// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.done

// • Print your array in its original order.done

// • Print your array in alphabetical order without modifying the actual list.done

// • Show that your array is still in its original order by printing it.done

// • Print your array in reverse alphabetical order without changing the order of the original list.done

// • Show that your array is still in its original order by printing it again.done

// • Reverse the order of your list. Print the array to show that its order has changed.done

// • Reverse the order of your list again. Print the list to show it’s back to its original order.done

// • Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.done

// • Sort to change your array so it’s stored in reverse 
//alphabetical order. Print the list to show that its order has changed.done

import inquirer from "inquirer";

let places :string [] =["Uganda","Hongkong","Southkorea","England","India"];
// ----------------------------- ----------------------------- -------------
console.log(places);
// ----------------------------- ----------------------------- -------------
console.log("In alphabetical order",places.slice().sort())
// ---------------------------- ----------------------------- --------------
console.log("oringinal order",places);
// ---------------------------- ----------------------------- --------------
console.log("reverse method",places.slice().sort().reverse())
// ---------------------------- ----------------------------- --------------
console.log(places);
// ---------------------------- ----------------------------- --------------
console.log("reversed change")
places.reverse();
console.log(places)
// --------------------------- ------------------------------ --------------
console.log("original",places.sort());
console.log(places)
// -------------------------- ------------------------------- --------------
console.log("In alphabetical order",places.slice().sort());
console.log(places);
// ------------------------- -------------------------------- --------------           
console.log("reverse method",places.sort().reverse())
console.log(places);