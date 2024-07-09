// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number 
// of keyword arguments. Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

import inquirer from "inquirer";


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function create_car(manufacturer: string, model: string, ...args: [string, any][]) {
    let car : Car = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Iterate over the additional arguments and add them to the car object
    args.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  // Call the function with required information and additional properties
  let myCar = create_car("Toyota", "Camry", ["color", "blue"] , ["year", 2023]);
  
  // Print the object to verify all information was stored correctly
  console.log(myCar);
  