// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

//  Loop through the array.

import inquirer from "inquirer";


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8,9]
numbers.forEach(number => {
  let suffix: string;

  switch (number) {
    case 1:
      suffix = 'st';
    
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }

  console.log(`${number}${suffix}`);
});

