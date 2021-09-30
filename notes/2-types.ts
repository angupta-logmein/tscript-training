// Array

let boolArray: boolean[];

let scores: Array<number>;

// any type

let students: any;

// Object type

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//optional properties
// we can make the properties optional by adding question mark
function print(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// union types
/**
 * A union type is a type formed from two or more other types,
 * representing values that may be any one of those types.
 *  We refer to each of these types as the union’s members.*/

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// now we can pass number or string in the above function.
// but what will happen if you try the following thing

function print2(id: number | string) {
  console.log("Your ID is: " + id.toUpperCase());
}
// and how can we solve the above error
/**
 * TypeScript will only allow you to do things with the union if that thing is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string
 *
 */

// == Type Aliases == //
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoor(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type ID = number | string;

// there is another way to give name to an object type.
interface Point1 {
  x: number;
  y: number;
}

function printCoord1(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord1({ x: 100, y: 100 });

/**
 * the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
 * Examples
 */
const constantString = "Hello world";
