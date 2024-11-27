function canJump2(nums: number[]): boolean {
    let maxReach: number = 0; 
    for (let currentIndex = 0; currentIndex < nums.length; ++currentIndex) {
        if (maxReach < currentIndex) {
            return false;
        }
        maxReach = Math.max(maxReach, currentIndex + nums[currentIndex]);
    }
    return true;
}