function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = 0;

  for (let i = 0; i < inputArray.length - 1; i += 1) {
    const value = Math.abs(inputArray[i] - inputArray[i + 1]);
    max = max > value ? max : value;
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

/*
Given an array of integers,
find the maximal absolute difference between any two of its adjacent elements.

**Example**

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/
