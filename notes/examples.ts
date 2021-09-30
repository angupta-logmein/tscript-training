let hellow = "helloworld";
// hellow = 23;  // TS will throw compile time error - cann't assign a different type

// can't detect automatically for this one. therefore, need an alternative method
let user = {
  name: "herse",
  id: 12,
};

// therefore
interface User {
  name: string;
  id: number;
}

const person: User = {
  name: "raja",
  id: 23, // can't even assign a different property name
};

function getUser(name: string, id: number): User {
  //...
  return {
    name,
    id,
  };
}

function deleteUser(user: User) {}

// Unions

type MyBool = true | false;

// Generics

type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backPack: Backpack<string>;
// now we can use backPack to call the methods

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 13 }; // did not assign the type of this variable.

logPoint(point); // still no error by default checks the shape and consider a valid type

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56

// consequences of structual typing
// Empty types
class Empty {}

function fn(arg: Empty) {
  // do something?
}

// No error, but this isn't an 'Empty' ?
fn({ k: 10 });

// identical types
class Car {
  drive() {
    // hit the gas
  }
}
class Golfer {
  drive() {
    // hit the ball far
  }
}
// No error?
let w: Car = new Golfer();

// Boxed types
(1).toExponential(); // numbers need paranthesis to call any method

// unit type
declare function pad(s: string, n: number, direction: "left" | "right"): string;

let s = "right";
pad("hi", 10, s); // error "string is not assignable to 'left' or right"

type Fstring = string & { _anyValue: any };

let company = "logmein";
let mme = {
  name: "MME",
  age: 24,
  company,
  [`${company}Title`]: "Staff software Engineer",
  toString() {
    return `${this.name} - ${this.age}`;
  },
};

function liveDangerously(x?: number | null) {
  // No error
  console.log(x.toFixed());
}

function splitInHalf(str: string | null) {
  let checkString = function () {
    if (str == null || str == undefined) {
      str = "test";
    }
  };
  checkString();
  return str.substring(0, str.length / 2);
}
