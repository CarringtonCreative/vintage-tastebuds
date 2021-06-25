/**
 * Problem:
 *   Get Maximum Coin Value
 *
 * Description:
 *  In front of you is a row of N coins, with values v1, v2, ..., vn.
 *  You are asked to play the following game. You and an opponent take turns
 *  choosing either the first or last coin from the row, removing it from the
 *  row, and receiving the value of the coin. Write a program that returns the
 *  maximum amount of money you can win with certainty, if you move first,
 *  assuming your opponent plays optimally.
 *
 * Approach:
 *  Iterate through list of coins with two indices coming from opposite ends
 *  Check which coin (first or last) is a maximum or minimum
 *  If it's the player's turn they get the maximum and the opponent gets the minimum
 *  If it's the opponent's turn they get the maximum and the player gets the minimum
 *  Return the player's total coins
 * Complexity:
 *  Time => O(n) We must iterate through the entire array
 *  Space => O(1) No extra space needs to be created
 *
 * Comments:
 *
 * @param {number[]} coins A list of coins
 * @return {number} number The maximum value of coins the player is able to win
 */

const PLAYER_TURN = {
  PLAYER: "1",
  OPPONENT: "2",
};

const getMaxCoin = (a, b) => {
  if (a >= b) return a;
  else return b;
};
const getMinCoin = (a, b) => {
  if (a <= b) return a;
  else return b;
};

const getMaxCoinValue = (coins) => {
  let i = 0;
  let j = coins.length - 1;
  let playerTurn = 1;
  let maxValue = 0;
  let { PLAYER, OPPONENT } = PLAYER_TURN;
  while (i <= j) {
    const leftCoin = coins[i];
    const rightCoin = coins[j];

    if (playerTurn == PLAYER) {
      maxValue += getMaxCoin(leftCoin, rightCoin);
      playerTurn = OPPONENT;
    } else if (playerTurn == OPPONENT) {
      maxValue += getMinCoin(leftCoin, rightCoin);
      playerTurn = PLAYER;
    }

    i++;
    j--;
  }
  return maxValue;
};

const coins = [3, 2, 5];
const result = getMaxCoinValue(coins);
console.log(result);
