`Сортировка в начале алгоритма получается самым быстрым вариантом
потом для каждого элемента который повторяется 1 раз делаем цикл с окном, которое сдвигаем в нужном направлении в сторону нужной суммы
Плюс сдвигаем лево и право если значение следующего элемента равно левому или правому помещённому в массив ответов
`

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b)
    let ans = []
    for (let i=0; i<sortedNums.length-2; i++){
        if(i>0 && sortedNums[i]==sortedNums[i-1]){
            continue
        }
        let left = i + 1
        let right = sortedNums.length - 1

        while(left<right){
            let summ = sortedNums[i] + sortedNums[left] + sortedNums[right]
            if(summ==0){
                ans.push([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while (sortedNums[left] == nums[left - 1] && left < right){
                    left += 1
                }
                while (sortedNums[right] == nums[right + 1] && left < right){
                    right -= 1
                } 
            } else if(summ < 0) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return ans
};