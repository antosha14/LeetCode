`Бинарный поиск через левый и правый индексы и их замену на центр при проверке на > или <
Если m меньше R то право отсортировано и минимум лежит левее
`


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let currLeftIndex = 0
    let currRightIndex = nums.length - 1
    const currMiddle = ()=>{return currLeftIndex + (Math.floor((currRightIndex-currLeftIndex)/2))}

    while(currLeftIndex<currRightIndex){
        i = currMiddle()
        if(nums[i] < nums[currRightIndex]){
            currRightIndex = i 
        } else{
            currLeftIndex=i+1
        }
    }
    return nums[currLeftIndex]
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))
console.log(findMin([2,1]))