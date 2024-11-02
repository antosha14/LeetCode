`
Массив содержащий минимально необходимое кол-во монет для добора до индекса

Массив для каждого числа до таргета с бесконечностями
Для каждой монеты запускаем цикл который
Для каддого числа от монеты до таргета заполнит массив DP

Можно ли добрать с этой монетой до i за меньшее число монет чем было до этого?

Закрываем кейс когда собрать невозможно
`

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(target + 1).fill(Infinity);
    dp[0] = 0;

    // Fill DP array
    for (const coin of coins) {
        for (let i = coin; i <= target; i++) {
            if (dp[i - coin] + 1 < dp[i]) dp[i] = dp[i - coin] + 1;
        }
    }

    // If target cannot be reached, return an empty array
    if (dp[target] === Infinity) return -1;

    return dp[target];
};

// [1,2,5], amount = 11