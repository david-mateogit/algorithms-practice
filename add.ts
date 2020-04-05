function add(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param1: number[]): number {
  return param1.reduce((acc: number, curr: number) => {
    if (typeof curr === "number") {
      return (acc += curr);
    }
    return acc;
  }, 0);
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, "safasdf"));
console.log(add2(2, 3));

/* 1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of # of params.
*/
