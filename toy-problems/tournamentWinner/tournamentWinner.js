/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/**
 * Given an array of pairs representing the teams that
 *  have competed against and an array containing the results
 *  of each competition, write a function that returns
 *  the winner of the tournament. Each time a team wins
 *  its 3 points
 *
 * No ties
 *
 * I: an array of tuples of the teams that have competed
 *  and an array of the results of each competition
 * O: String - the winning team
 *
 * Plan:
 *  declare winner and set it to an empty string
 *  create scores object and set it to [winner]: 0
 *
 *  iterate over the input competitions array
 *    declare a home team thats set to index 0 of the tuple
 *    decalre an away team thats set to index 1 of the tuple
 *
 *    declare winningTeam that is set to the team that won
 *    (so if the current result for the current team match is 1
 *      then the homeTeam won else the awayTeam won)
 *
 *    invoke updateScores function that updates the scores object
 *      takes in three paremeters: winningTeam, points(which is 3),
 *      and the scores object
 *      if the team is not in scores
 *        add that team and set them to 0
 *      else - increment the points by 3;
 *
 *    if the winningTeam property in scores is greater than the
 *    previous winner
 *      set winner to the winningTeam
 *
 *    return winner
 */

const updateScores = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
};

const tournamentWinner = (competitions, results) => {
  let winner = '';
  const scores = { [winner]: 0 };

  for (let i = 0; i < competitions.length; i += 1) {
    const result = results[i];
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];

    const winningTeam = result === 1 ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[winner]) {
      winner = winningTeam;
      console.log(winner);
    }
  }
  return winner;
};

console.log(tournamentWinner([
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
], [0, 0, 1]));
