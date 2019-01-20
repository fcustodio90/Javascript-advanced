/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to
his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score.
After that, it's the next player's turn
- The first player to reach 100 points on GLOBALscore wins the game

*/

// Setting multiple variables as undefined
var scores, roundScore, activePlayer

// assign the previous variables with the default values
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// Hide the dice image at the start of the game
document.querySelector('.dice').style.display = 'none';

// Setting the score as 0 for both players when the game starts
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
// Setting the current score as 0 for both players when the game starts
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Random dice number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  var playerDOM = document.querySelector('#current-' + activePlayer);

  diceDOM.style.display = 'block';
  diceDOM.src = `dice-${dice}.png`;

  // 3. Update the round score IF the rolled number was NOT a 1.
  if (dice !== 1) {
    // add score
    roundScore += dice;
    playerDOM.textContent = roundScore;
  } else {
    // switch to the next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // set the score back to zero
    roundScore = 0;
    // reset the current score if the roll is 1
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // adding the toggle functionality for better UX
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // Hide the dice if the result is 1 for better UX
    document.querySelector('.dice').style.display = 'none';

  }


});
