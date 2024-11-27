function merge(nums1: number[], countNums1: number, nums2: number[], countNums2: number): void {
    let lastNums1Index: number = countNums1 - 1;
    let lastNums2Index: number = countNums2 - 1;
    let mergedIndex: number = countNums1 + countNums2 - 1;

    while (lastNums2Index >= 0) {
        nums1[mergedIndex--] = lastNums1Index >= 0 && nums1[lastNums1Index] > nums2[lastNums2Index]
            ? nums1[lastNums1Index--]
            : nums2[lastNums2Index--];
    }
}