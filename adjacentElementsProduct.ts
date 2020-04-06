function adjacentElementsProduct(
  inputArray: number[]
): { x: number; y: number; total: number } {
  let largest = {
    x: 0,
    y: 0,
    total: 0,
  };

  for (let i = 0; i < inputArray.length - 1; i += 1) {
    const total = inputArray[i] * inputArray[i + 1];
    const obj = { x: inputArray[i], y: inputArray[i + 1], total };

    largest = largest.total < obj.total ? obj : largest;
  }

  return largest;
}

console.log(adjacentElementsProduct([3, 6, 1, 9, -5, 7, 3]));

/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
*/
