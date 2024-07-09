// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
// a message indicating the number of people you are inviting to dinner.
let guestName = ["Mirza", "Abdullah Ali", "Irtiza Ali"];
guestName.forEach(guestName => {
    console.log(guestName, "YOU ARE INVITED FOR FREE DINNER");
});
let invitedGuests = ["irtiza", "fuzail", "mirza"];
invitedGuests.splice(1, 2);
console.log(invitedGuests, "cant make dinner");
// new guest list , exercise 14
let newguest = ["fuzail", "mirza"];
newguest.push("anas");
console.log(newguest);
// .)
newguest.forEach(newguest => { console.log(newguest, "YOU ARE INVITED FOR DINNER"); });
console.log("Great news i found a big table so more space is available.");
let newinvitedGuests = ["irtiza", "fuzail", "mirza"];
newinvitedGuests.unshift("imran");
invitedGuests.splice(2, 0, "umer");
invitedGuests.push("asheer");
console.group(invitedGuests);
console.log("SORRY!I just found that table could not arrive in time that why i have only two person space ");
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
let updatedguestlist = ["umer", "irtiza", "fuzail", "asheer", "anas"];
updatedguestlist.shift;
console.log(updatedguestlist);
export {};
