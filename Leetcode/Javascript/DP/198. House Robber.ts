`
Максимум если не грабили предыдущий    
и если ГРАБИЛИ предыдущий
rob1 - за 2 до текущего
rob2 - за 1 до текущего
`

function rob1(nums: number[]): number {
    let [robPrevious, robCurrent] = [0, 0];
  
    for (const currentHouseValue of nums) {
        [robPrevious, robCurrent] = [Math.max(robPrevious, robCurrent), robPrevious + currentHouseValue];
    }
    return Math.max(robPrevious, robCurrent);
}

function rob2(nums: number[]): number {
    let rob1 = 0;
    let rob2 = 0;
    for (const n of nums) {
      const profit = Math.max(n + rob1, rob2);
      rob1 = rob2;
      rob2 = profit;
    }
    return rob2;
  }