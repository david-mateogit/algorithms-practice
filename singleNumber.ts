function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i += 1) {
    const filtered = nums.filter((item) => item === nums[i]);
    if (filtered.length === 1) {
      return filtered[0];
    }
  }

  return null;
}

console.log(singleNumber([3, 3, 4, 1, 2, 1, 2]));

/* Given a non-empty array of integers, every element appears twice except for one. Find that single one. */
