function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Invalid input: Both parameters must be numbers');
  }
}

let result1 = addSafe(5, 10); // Correct usage
console.log(result1); // Output: 15

try {
  let result2 = addSafe(5, "10"); // Incorrect usage
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Both parameters must be numbers
}
