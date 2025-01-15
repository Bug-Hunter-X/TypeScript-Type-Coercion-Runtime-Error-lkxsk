# TypeScript Type Coercion Runtime Error

This example demonstrates a subtle bug in TypeScript where type coercion can lead to runtime errors that are not caught during compilation.

The `add` function is defined to accept two numbers and return a number.  However, the code calls it with a number and a string.  TypeScript's type system doesn't prevent this because JavaScript allows for loose type coercion.  The addition operation will implicitly convert the string to a number, but if this conversion fails (e.g., the string is not a valid number) it results in a runtime error.

The solution shows how to improve type safety using type guards or stricter type checking.