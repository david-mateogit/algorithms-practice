function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = 0;

  for (let i = 0; i < inputArray.length - 1; i += 1) {
    const value = inputArray
      .slice(i, k + i)
      .reduce((acc, curr) => acc + curr, 0);

    max = max > value ? max : value;
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

**Example**

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
-   2 + 3 = 5;
-   3 + 5 = 8;
-   5 + 1 = 6;
-   1 + 6 = 7.

   Thus, the answer is 8

*/
