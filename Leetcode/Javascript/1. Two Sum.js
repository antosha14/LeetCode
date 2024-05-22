`Map with reminders as keys and indexes as values
return when we encounter reminder = current element
`

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let reminderMap = new Map()
    for (let i=0; i < nums.length;i++){
        if(reminderMap.has(nums[i])){
            return [reminderMap.get(nums[i]),i]
        }
        reminderMap.set(target - nums[i],i)
    }
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))