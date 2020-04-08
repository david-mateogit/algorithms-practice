function alphabetSubsequence(s: string): boolean {
  const arr: string[] = s.split("");

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i].charCodeAt(0) >= arr[i + 1].charCodeAt(0)) {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));

/*
Check whether the given string is a subsequence of the plaintext alphabet.

**Example**

- For s = "effg" or s = "cdce", the output should be
alphabetSubsequence(s) = false

- For s = "ace" or s = "bxz", the output should be
alphabetSubsequence(s) = true.
*/
