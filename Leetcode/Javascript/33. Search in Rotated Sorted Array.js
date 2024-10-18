`
Чекаем на упорядоченность через центр, а дале в заввисимости от упорядоченности
Сравниваем сторону с таргетом и сдвигаем окно в соответствующем направлении
`


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let currLeftIndex = 0
    let currRightIndex = nums.length - 1
    const currMiddle = ()=>{return currLeftIndex + (Math.ceil((currRightIndex-currLeftIndex)/2))}

    while(currLeftIndex<=currRightIndex){
        i = currMiddle()
        if(nums[i]==target){
            return i    
        }

        if(nums[i] <= nums[currRightIndex]){
            if(nums[i] <= target && target<=nums[currRightIndex]){
                currLeftIndex=i
            } else {
                currRightIndex=i-1
            }
            
        } else {
            if(nums[i] >= target && target>=nums[currLeftIndex]){
                currRightIndex=i
            }else{
                currLeftIndex=i+1
            }
        }
    }
    return -1
};

console.log(search([3,4,5,1,2], 4))
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([11,13,15,17], 13))
console.log(search([1,3], 2))