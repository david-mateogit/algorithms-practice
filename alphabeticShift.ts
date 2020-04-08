function alphabeticShift(inputString: string): string {
  return inputString
    .toLowerCase()
    .split("")
    .map((c) => {
      let charCode = c.charCodeAt(0);
      if (charCode === 122) {
        charCode = 96;
      }
      return String.fromCharCode(charCode + 1);
    })
    .join("");
}

console.log(alphabeticShift("crazy"));

/*
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

**Example**

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".
*/
