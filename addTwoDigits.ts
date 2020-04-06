function addTwoDigits(n: number): number {
  const str = String(n);
  return str
    .split("")
    .reduce((acc: number, curr: string) => (acc += parseInt(curr)), 0);
}

console.log(addTwoDigits(29)); // 11
console.log(addTwoDigits(2934234)); // 27

/*
you are given a two-digit integer n. Return the sum of its digits.

**Example**

For n = 29, the output should be
addTwoDigits(n) = 11.
*/
