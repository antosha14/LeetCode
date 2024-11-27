function mySqrt(num: number): number {
    let left: number = 0;
    let right: number = num;
    while (left < right) {
        const mid: number = (left + right + 1) >>> 1; 
        if (mid <= num / mid) { 
            left = mid; 
        } else {
            right = mid - 1;
        }
    }

    return left;
}