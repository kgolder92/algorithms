/* eslint-disable no-console */
/*
* Write a function that generates every sequence of throws a single
* player could throw any number of rounds game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
* Plan:
  check if rounds is 0  return []
  create permutations array
  creat inner function passing in plays which is a string
    check if the length is equal to the number of rounds
      push plays onto permutations array and return
    iterate through possible hands(r, p, s)
     call inner function with adding the current play to the plays string
  invoke inner function with an empty string
*/

const rockPaperScissors = (rounds) => {
  if (rounds === 0) return [];

  const permutations = [];

  const playRound = (plays) => {
    if (plays.length === rounds) {
      permutations.push(plays);
      return;
    }
    ['r', 'p', 's'].forEach((play) => {
      playRound(plays + play);
    });
  };
  playRound('');
  return permutations;
};
console.log(rockPaperScissors(4));
