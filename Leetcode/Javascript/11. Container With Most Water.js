`
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
`

`
Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.
`


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0 
    let r = height.length - 1
    let maxVolume = -Infinity

    while(l<r){
        maxVolume = Math.max(maxVolume, Math.min(height[r], height[l])*(r-l))
        if(height[r]>height[l]){
            l=l+1
        }else{
            r=r-1
        }
    }
    return maxVolume
};

console.log(maxArea([8,7,2,1]))

