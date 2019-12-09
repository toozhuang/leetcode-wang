const hashElementMap = nums => {
  const hashM = {};
  let bigValue = {};
  for (let index = 0; index < nums.length; index++) {
    if (hashM[nums[index]]) {
      hashM[nums[index]] = hashM[nums[index]] + 1;
      if (bigValue.value < hashM[nums[index]]) {
        bigValue.key = nums[index];
        bigValue.value = hashM[nums[index]];
      }
    } else {
      hashM[nums[index]] = 1;
      if (!bigValue.key) {
        bigValue.key = nums[index];
        bigValue.value = hashM[nums[index]];
      }
		}
	}
  return bigValue.key;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  return hashElementMap(nums);
};

console.log(majorityElement([6,5,5]));
