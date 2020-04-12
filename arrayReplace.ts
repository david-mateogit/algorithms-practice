function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  const newArray = inputArray.map((item) =>
    item === elemToReplace ? substitutionElem : item
  );

  return newArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

/*
Given an array of integers,
replace all the occurrences of elemToReplace with substitutionElem.

**Example**

For
inputArray = [1, 2, 1],
elemToReplace = 1
and substitutionElem = 3,
the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
*/
