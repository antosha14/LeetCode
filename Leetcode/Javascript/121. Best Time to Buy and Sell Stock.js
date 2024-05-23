/**
 * @param {number[]} prices
 * @return {number}
 */

`You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`

`1 loop, current profit and 2 ifs for updating current lowest price and max profit
Optimized only checking if dif this higher (without checking if price itself is lower)
`
var maxProfit = function(prices) {
    let currMaxPProfit = 0
    let curBuy = prices[0]
    for (let i=0; i < prices.length;i++){
        let currProfit = prices[i] - curBuy
        if(currProfit>currMaxPProfit){
            currMaxPProfit=currProfit
        }
        if(prices[i]<curBuy){
            curBuy=prices[i]
        }
    }
    return currMaxPProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))