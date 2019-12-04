// 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，
// 返回移除后数组的新长度。
// 不要使用额外的数组空间，
// 你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let ans = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != val) {
            nums[ans] = nums[index];
            ans++;
        }
    }
    return ans;
};



