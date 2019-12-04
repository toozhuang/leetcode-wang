const twoSum = (nums, target) => {
  let sumMap = {};
  for (let index = 0; index < nums.length; index++) {
    let result01 = target - nums[index];
    if (sumMap[result01]) {
      return index > sumMap[result01] - 1
        ? [sumMap[result01] - 1, index]
        : [index, sumMap[result01] - 1];
    }

    sumMap[nums[index]] = index + 1;
  }
};
