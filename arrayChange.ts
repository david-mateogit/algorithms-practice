function arrayChange(inputArray: number[]): number {
  let counter: number = 0;

  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      counter += difference;
    }
  }

  return counter;
}

console.log(arrayChange([9, 7, 1]));

/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

*/
