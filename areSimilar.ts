function areSimilar(a: number[], b: number[]): boolean {
  const arrC: number[] = [];
  const arrD: number[] = [];

  if (a.join("") === b.join("")) {
    return true;
  }
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      arrC.push(a[i]);
      arrD.push(b[i]);
    }
  }

  if (arrC.length === 2 && arrC.join("") === arrD.reverse().join("")) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 7, 5, 3], [5, 2, 1, 7, 3]));
console.log(areSimilar([1, 2, 3], [1, 3, 2]));
console.log(areSimilar([1, 2, 3], [3, 2, 1]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

**Example**

- For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

- For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

- For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
*/
