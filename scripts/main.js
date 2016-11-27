$(function() {

  let MasterColors = [];
  let UserColors = [];

  // Array of colors
  function colorsArray() {
    const colors = ['green', 'red', 'blue', 'yellow'];

    return (function() {
      MasterColors.push(colors[Math.floor(Math.random() * 4)]);
      return MasterColors;
    })();
  }

  // Makes the tiles flash
  function display() {
    let array = colorsArray();

    for (let i = 0; i <= array.length; i++) {
      setTimeout(function() {
        $('#' + array[i - 1] + '-tile').addClass('darken');
      }, i * 1000);
      setTimeout(function() {
        $('#' + array[i - 1] + '-tile').removeClass('darken');
      }, i * 1150);
    }
  }

  // User Input
  $('#green-input').click(function() {UserColors.push('green');});
  $('#red-input').click(function() {UserColors.push('red');});
  $('#blue-input').click(function() {UserColors.push('blue');});
  $('#yellow-input').click(function() {UserColors.push('yellow');});

  // User Submit
  $('#submit-answer').click(function() {
    if (MasterColors.join('') !== UserColors.join('')) {
      $('#game-result').html(`Sorry, It Was: ${MasterColors.join(', ')}`).addClass('red');
      $('#user-input-answers').html(`Your Guess: ${UserColors.join(', ')}`);
      $('#play-game').html('Play!');
      MasterColors = [];
    } else {
      $('#game-result').html('You Got It! Press: Go Again!').removeClass('red').addClass('green');
      $('#user-input-answers').html('');
      $('#play-game').html('Go Again!');
    }
  });

  //Play game
  $('#play-game').click(function() {
    display();
    // Clear some data
    $('#user-input-answers, #game-result').html('');
    UserColors = [];
  });

});
