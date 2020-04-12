function arrayPreviousLess(items: number[]): number[] {
  const previousArr: number[] = [];

  for (let i = 0; i < items.length; i += 1) {
    if (items[i] > items[i - 1]) {
      previousArr.push(items[i - 1]);
    } else {
      previousArr.push(-1);
    }
  }

  return previousArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

/*
Given array of integers, for each position i, search among the previous
positions for the last (from the left) position that contains a smaller value.
Store this value at position i in the answer. If no such value can be found,
store -1 instead.

**Example**

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].
*/
