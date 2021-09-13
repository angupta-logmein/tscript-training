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

let teacherAge: number = 34;
let teacherName: string = "mme";

let input = document.querySelector("input#name_field") as HTMLInputElement;

interface ClickListener {
  (this: Window, e: MouseEvent): void;
}

const myListener: ClickListener = (e) => {
  console.log("mouse clicked", e);
};

addEventListener("click", myListener);

myListener.bind(window, new MouseEvent("click"));

// Error the 'this' context of type
//'void' is not asignable to
//method's 'this' of type window
