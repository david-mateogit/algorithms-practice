function allLongestStrings(inputArray: string[]): string[] {
  let largest = "";

  inputArray.forEach((st: string) =>
    largest.length < st.length ? (largest = st) : largest
  );

  const allLongest = inputArray.filter((st) => largest.length === st.length);

  return allLongest;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

/*
Given an array of strings, return another array containing all of its longest strings.

**Example**

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

*/
