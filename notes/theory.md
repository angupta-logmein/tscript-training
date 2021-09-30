[Source](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

# History

    * Simple scripting language
    * Browsers were slow as not much JavaScript code was expected
    * JavaScript became popular -> need to work on the optimization of browser engines.
    * then move to servers using node.js
    * now, we use JS for the entire stack.
    * TypeScript is a flavour of JS and adds TypeSystem to JS

# Why TypeScript??

    * JS equality operator ```==``` coerces its arguments, and leads to unexpected bahaviour
    * TypeScript supports static checking: detect errors without running code
    * A typed superset of JS
    * JS syntax is legal in TS - provide some examples
    * preserves the runtime behaviour of JS
    * it is just a compile time type-checker

# How TS works - how do we assign types in TS?

    * Types by inference - taking implicitly based on initial assignment
    * Some design patterns used in JS can not be detected automatically.
    * Interface can be used to define type for such designs
    * can use interface declaration with classes
    * TS extends the list of primitive types available in JS with any, unknown, never and void
    * certain constructs such as singletons and static classes are unncessary in TypeScript.
    * however TS supports several oops concepts such as interfaces, inheritance and static methods
    * other programming languages - c#, java follows nominal type system where two classes of same shape need to be in some kind of relationship to be used at one place.
    * every type is just a set - a value can belong to multiple sets , example by union.
    * TypeS uses postfix types such as ```x:string``` instead of ```string x```

## Composing types

### Creating Complex types

    * combining simple ones
    * using union and generics

#### Union

    * declare that a type could be one of many types. you can choose different types such as string and array

### Intersections

#### Generics

    * provides variables to types
    * can declare our own types using generics - example given

# Structural Type System

    * TS focues on the shape that values have. also called duck typing or structual typing.
    * two objects have the same shape, will be considered of same type
    * shape matching only requires a subset of fields to match
    * In TypeScript, objects are not of a single exact type. For example, if we construct an object that satisfies an interface, we can use that object where that interface is expected even though there was no declarative relationship between the two.
    * there are some consequences of structural typing
    * Another drawback is you can not get or query the type at runtime, because TS type system is fully erased

# Types

    * [T,T] - tuples are of fixed length but mutable
    * [T,T] is a subtype of T[]
    * Gradual typing with any - use noimplicitAny: true in tsconfig.json file

## Boxed Types

    * Number, String

## Unit Types

    * subtypes of primitive types that contain exactly one value. "foo" has type "foo"

## Contextual typing

    * happens in Haskell as well, a functional programming language.

## Type aliases

    * are mere aliases just like type in haskell
