// Structural Typing
class Foo {
  method(input: number) {
    /* ... */
  }
}
class Bar {
  method(input: number) {
    /* ... */
  }
}

let foo: Foo = new Bar();
