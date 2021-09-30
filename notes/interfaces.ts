// sometimes some design are not implicitly detected by TS

let myCar: { make: string; model: string; year: number };
myCar = {
  make: "honda",
  model: "Accord",
  year: 1992,
  color: { r: 255, g: 0, b: 0 }, // one method to remove this error is to use type casting
} as { make: string; model: string; year: number };

// but this method can't be helpful if we need to alter the shape of multiple types.
/**
 * Interfaces allows us to define a structure and refer to it by name
 * only structure, no implementation.
 * do not compile to any js code.
 * these are open and can be extended later on.
 * it describes what an object looks like
 */
interface Truck {
  make: string;
  model: string;
  year: number;
}
interface Truck {
  color: string; // here if you declare interface with the same name again they will combine all the properties
}
let myTruck: Truck = {
  year: 1992,
  model: "honda",
  make: "hero",
  color: "black",
};

// Example for Interface extending interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
const bear: Bear = { name: "nn", honey: false };
bear.name;
bear.honey;

// Difference between class and interface
/**
 * interface is a group of related properties and methods that describe the object but neither provides implementation nor initialisation for them.
 */
