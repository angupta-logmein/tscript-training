# shopping cart

```js
let cart = cashier();
cart
  .add("Apple", 0.99) // add one apple
  .add("Pear", 1.99, 2) // add two pears
  .addItem({
    // add three bananas
    name: "banana",
    price: 2.99,
    qty: 3,
  });
console.log("your total for ${cart.length} items is $${cart.total}");
```

## Structure of Cashier

- items that can be added to the cart as an object should look like this

> cart item

        * name String
        * price Number
        * qty Number

- and the object returned by the cashier() function ( and add, additem) should look like

> cartAPI

        * length Number
        * total Number
        * addItem takes a cartItem, returns a cartAPI
        * add takes (name, price, qty), return a cartAPI

## Run tests

```js
npm run test test/cashier
```
