/* eslint-disable no-console */
/**
 * @param {number[]} prices
 * @return {number}
 */

/* 121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction
(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// Brute Force O(n^2)
/*
var maxProfit = function(prices) {
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i += 1) {
      const buyPrice = prices[i];

      for(let j = i + 1; j < prices.length; j += 1) {
        const sellPrice = prices[j];
        const profit = sellPrice - buyPrice;
        maxProfit = Math.max(maxProfit, profit)

      }
    }
    return maxProfit;
};
*/

// Optimized Solution O(n)
const getMaxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];

  prices.forEach((price) => {
    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(price, minPrice);
    console.log('maxProfit', maxProfit);
    console.log('minPrice', minPrice);
  });
  return maxProfit;
};

console.log(getMaxProfit([7, 1, 5, 3, 6, 4])); // -> 5
/*
  max 0 or 7 - 7  = 0
  min 7 or 7      = 7

  max 0 or 1 - 7  = 0
  min 1 or 7      = 1

  max 0 or 5 - 1  = 4
  min 5 or 1      = 1

  max 4 or 3 - 1  = 4
  min 3 or 1      = 1

  max 4 or 6 - 1  = 5
  min 6 or 1      = 1

  max 5 or 4 - 1  = 5
  min 4 or 1      = 1

  return max = 5
*/
