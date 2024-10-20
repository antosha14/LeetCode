`
2 поинтера со сдвигами слева или справа в завитсимости от того нуджно ли увеличить или уменьшить число

`

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(sum==target){
            return [left+1, right+1]
        }
        if(sum<target){
            left += 1
        } else{
            right -= 1
        }
    }
};