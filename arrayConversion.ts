function arrayConversion(inputArray: number[]): number {
  let newArr: number[] = [...inputArray];
  let isOdd: boolean = true;

  function workPairs(arr: number[], flag: boolean): number[] {
    const results: number[] = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i + 1]) {
        !flag && results.push(arr[i] * arr[i + 1]);
        flag && results.push(arr[i] + arr[i + 1]);
      } else {
        results.push(arr[i]);
      }
    }
    newArr = results;
    return newArr;
  }

  while (newArr.length !== 1) {
    workPairs(newArr, isOdd);
    isOdd = !isOdd;
  }

  return newArr[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/*
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

-   On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
-   On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

**Example**

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
arrayConversion(inputArray) = 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

*/
