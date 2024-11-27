function plusOne(digits: number[]): number[] {
    const length = digits.length;

    for (let index = length - 1; index >= 0; index--) {
        digits[index]++;
        if (digits[index] < 10) {
            return digits;
        }

        digits[index] = 0;
    }

    return [1, ...digits];
}