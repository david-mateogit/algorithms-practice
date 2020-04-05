function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

/* Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

**Example**

For a = [2, 4, 7], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
absoluteValuesSumMinimization(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be
absoluteValuesSumMinimization(a) = 7. */
