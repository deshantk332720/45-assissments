// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let invitedGuests = ["irtiza", "fuzail", "mirza"];
invitedGuests.splice(1, 2);
console.log(invitedGuests, "cant make dinner");
// new guest list , exercise 14
let newguest = ["fuzail", "mirza"];
newguest.push("anas");
console.log(newguest);
// .)
newguest.forEach(newguest => { console.log(newguest, "YOU ARE INVITED FOR DINNER"); });
export {};
