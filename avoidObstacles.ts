function avoidObstacles(inputArray: number[]): number {
  const obstacles = inputArray.sort((a, b): number => a - b);
  const jumpPoints: number[] = [];

  for (let i = 1; i <= obstacles[obstacles.length - 1] + 1; i += 1) {
    if (!obstacles.includes(i)) {
      jumpPoints.push(i);
    }
  }

  console.log(jumpPoints);

  for (let i = 0; i < jumpPoints.length; i += 1) {
    if (obstacles.every((element) => element % jumpPoints[i] !== 0)) {
      console.log(jumpPoints[i]);
      return jumpPoints[i];
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

/*
You are given an array of integers representing coordinates
of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right.
You are allowed only to make jumps of the same length
represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

**Example**

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.
*/
