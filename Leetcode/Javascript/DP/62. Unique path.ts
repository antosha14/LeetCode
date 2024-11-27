function uniquePaths(rows: number, columns: number): number {
    const dp: number[] = Array(columns).fill(1);
  
    for (let row = 1; row < rows; ++row) {
      for (let col = 1; col < columns; ++col) {
        dp[col] += dp[col - 1];
      }
    }
    return dp[columns - 1];
  }