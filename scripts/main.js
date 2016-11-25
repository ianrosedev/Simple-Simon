$(function() {

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
    console.log(array);
    for (let i = 0; i <= array.length; i++) {
      setTimeout(function() {
        // !Why does i - 1 make this work?
        $('#' + array[i - 1] + '-tile').addClass('lighten');
      }, i * 1000);
      setTimeout(function() {
        $('#' + array[i - 1] + '-tile').removeClass('lighten');
      }, i * 1100);
    }
  }

  function userInput() {
    let input = [];

    $('#green-input').click(() => input.push('green'));
    $('#red-input').click(() => input.push('red'));
    $('#blue-input').click(() =>  input.push('blue'));
    $('#yellow-input').click(() => input.push('yellow'));
    $('#submit-answer').click(() => {
      console.log(input);
      $('#user-input-answers').html(input.join(' '));
      return input;
    });

  }

  $('#play-game').click(() => display());
  userInput();

});
