$(function game() {

  const tiles = Object.freeze({
    0: 'green',
    1: 'red',
    2: 'blue',
    3: 'yellow'
  });

  function activeTiles() {
    return Math.floor(Math.random() * 4);
  }

  // Sets the array of cpu tiles selected
  function colorsArray(times) {
    let colors = [];
    for (let i = 0; i < times; i++) {
      colors[i] = tiles[activeTiles()];
    }
    return colors;
  }

  // Makes the tiles flash
  function display(array = colorsArray(5)) {
    for (let i = 0; i <= array.length; i++) {
      setTimeout(function() {
        $('#' + array[i - 1] + '-tile').addClass('lighten');
      }, i * 1000);
      setTimeout(function() {
        $('#' + array[i - 1] + '-tile').removeClass('lighten');
      }, i * 1100);
    }
    return array;
  }

  // Logic to make game work
  function playGame(cpuColors = display()) {
    let userInput = [];

    // User Input
    $('#green-input').click(() => userInput.push('green'));
    $('#red-input').click(() => userInput.push('red'));
    $('#blue-input').click(() =>  userInput.push('blue'));
    $('#yellow-input').click(() => userInput.push('yellow'));

    // Submit button clicked reasons and outputs game results
    $('#submit-answer').click(() => {
      if (cpuColors.join('') !== userInput.join('')) {
        $('#user-input-answers').html(`Your Guess: ${userInput.join(', ')}`);
        $('#game-result').html(`You Lose! It was: ${cpuColors.join(', ')}.`);
        $('#play-game').html('Try Again!');
      } else {
        $('#user-input-answers').html('');
        $('#game-result').html('You WIN!');
        $('#play-game').html('Play Again!');
      }
    });
  };

  // Game Start
  $('#play-game').click(() => {
    playGame();
    // Clears results
    $('#game-result, #user-input-answers').html(' ');
  });

});
