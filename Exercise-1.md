# Exercise 1

[] create two functions rgbToHex and hexToRgb

## rgbToHex

- should take three 8-bit decimal (0-255) color channels, corresponding to red, green and blue
- and return to corresponding hex string.

## hexToRgb

- should take a 3 or 6-digit hex string and return an object with properties r,g and b
- having an equivalent 8-bit decimal color values
- Both of these functions should be named exports from the color-utils.js module.

## Examples

```js
rgbToHex(255, 0, 0); // "ff00000"
hexToRgb("00ff00"); // {r: 0, g: 255,b : 0}
```

## Hints

1. converting a string to a number

```js
parseInt("124", 10) === 124;
```

2. converting a number to a hexadecimal string

```js
parseInt(124, 10).toString(16) === "7c";
```

3. converting a hexadecimal number to a string.

```js
parseInt("7c", 16).toString(16) === 124;
```
