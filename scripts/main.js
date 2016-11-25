$(function game() {

  const tiles = Object.freeze({
    0: 'green',
    1: 'red',
    2: 'blue',
    3: 'yellow'
  });

  function activeTile() {
    return Math.floor(Math.random() * 4);
  }

  function colorsArray(times) {
    let colors = [];
    for (let i = 0; i < times; i++) {
      colors[i] = tiles[activeTile()];
    }
    return colors;
  }


  function display(array = colorsArray(5)) {
    for (let i = 0; i <= array.length; i++) {
      setTimeout(function() {
        // !Why does i - 1 make this work?
        $('#' + array[i - 1] + '-tile').addClass('lighten');
      }, i * 1000);
      setTimeout(function() {
        $('#' + array[i - 1] + '-tile').removeClass('lighten');
      }, i * 1100);
    }

    return array;
  }

  function playGame(cpuColors = display()) {
    let userInput = [];

    $('#green-input').click(() => userInput.push('green'));
    $('#red-input').click(() => userInput.push('red'));
    $('#blue-input').click(() =>  userInput.push('blue'));
    $('#yellow-input').click(() => userInput.push('yellow'));

    $('#submit-answer').click(() => {
      $('#user-input-answers').html(userInput.join(', '));
      if (cpuColors.join('') === userInput.join('')) {
        $('#game-result').html('WIN!');
      } else {
        $('#game-result').html('You Lose!');
      }
    });

  };

  $('#play-game').click(() => {
    playGame();
  });

});
