// still prototypal inheritance, a better syntax.
// need knowledge on how prototypal inheritance works
// special constructor function to initialize instances;
class Person {
  constructor(name) {
    // to create the instance of that object
    this.name = name; // feasible in javascript like this.
  }
}

let mme = new Person("GoMobile");
console.log(mme);

class Student {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return `Person: ${this.name}`;
  }
  changeName(name) {
    this.name = name;
  }
  static createRandom() {
    return new Person(`${Math.random()}`);
  }
}

// In ES2018 stage 2, there is a discussion going on adding a public and instance fields in regular js

// difference between instances vs prototype fields

function Animal() {}
Animal.prototype = {
  tags: [],
};

let a1 = new Animal();
let a2 = new Animal();
a1.tags.push("food");
console.log(a2.tags);
// here it will print food in the array as animal has one instance of prototype tags shared by everyone.
// will not happen in the class. it will be created per instance

// Adding static properties or methods to a class make them act like a singleton
// and while defining non-static methods and properties make them like factories

/**
 * Inheritance:
 * Subclasses can be created by using extends keyword
 * to call methods on parent call user super keyword
 */
