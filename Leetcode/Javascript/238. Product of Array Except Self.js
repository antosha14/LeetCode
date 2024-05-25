`Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
`
`Сформировать 2 массива 1 из суффиксов второй из префиксов для соответствующих индексов
Под это 2 разных цикла
`

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefixes = new Array(n).fill(1);  
    const suffixes = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        prefixes[i]=prefixes[i-1] * nums[i-1]
    }
    for (let i = n-2; i >=0; i--) {
        suffixes[i]=suffixes[i+1] * nums[i+1]
    }
    let sol = []
    for (let i = 0; i < nums.length; i++) {
        sol[i]=prefixes[i] * suffixes[i]
    }

    return sol;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))