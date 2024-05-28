`Given an integer array nums, find the 
subarray with the largest sum, and return its sum.
`

`
1 variable to keep current sum
2 to keep max sum
1 loop ti update variables
`
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};