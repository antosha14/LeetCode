`
Optimal
Индекс в nums отдельно и  если юник мы по нему добавляем, и инкрементируем его
`
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
            return 0;
        }
    
        let k = 1; // Initialize the count of unique elements to 1
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[k - 1]) {
                nums[k] = nums[i]; // Overwrite the next unique element
                k++;
            }
        }
    
        return k;
    };

`
Brute force, замедляет именно splice
`
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    let i = 1
    while(i<nums.length){
        if(nums[i]==nums[i-1]){
            nums.splice(i,1)
        } else(
            i+=1
        )
    }
    return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))