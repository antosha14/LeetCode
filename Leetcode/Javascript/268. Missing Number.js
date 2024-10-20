`
Нужно массив который нам дан, XOR с массивом со всеми числами, и тогда останется только искомое число
Это работает потому что XOR числа с самим собой это 0, а c нулём это само число

Или разница сумм чистого массива и данного
`


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let ans = nums.length
    for (const [i, num] of nums.entries()) {
        ans ^= i ^ num
    }
    return ans
};


var missingNumber2 = function(nums) {
    let set = new Set(nums)
    for (let i = 0; i <= nums.length ; i++) {
      if(!set.has(i)){
        return i
      }
    }
};
