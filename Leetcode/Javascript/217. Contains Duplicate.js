/**
 * @param {number[]} nums
 * @return {boolean}
 */

`Кол-во уникальных хорошо считается путём конвертации в Set`
var containsDuplicate = function(nums) {
    let symbols = new Set(nums)
    return symbols.size !== nums.length
};
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))