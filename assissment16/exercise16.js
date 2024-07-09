//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to
// the end of your program informing people that you found a 
//bigger dinner table.
console.log("Great news i found a big table so more space is available.");
let invitedGuests = ["irtiza", "fuzail", "mirza"];
invitedGuests.unshift("imran");
invitedGuests.splice(2, 0, "umer");
invitedGuests.push("asheer");
console.group(invitedGuests);
export {};
