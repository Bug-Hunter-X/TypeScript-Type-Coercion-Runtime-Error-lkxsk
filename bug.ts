function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, "10"); // Type error is not caught at compile time
console.log(result); // This will result in a runtime error