function addBorder(picture: string[]): string[] {
  const arr = picture.map((item) => `*${item}*`);
  const len = arr.length;
  const itemLen = arr[0].length;
  const stars = "*".repeat(len + itemLen);
  const newArr = [stars, ...arr, stars];
  return newArr;
}

console.log(addBorder(["very long string", "abc", "ded"]));

/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

For picture = ["abc",
              "ded"]
the output should be
["*****",
"*abc*",
"*ded*",
"*****"]

*/
