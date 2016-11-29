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
    let timeWait = 1000;
    let timeFlash = 500;

    for (let i = 0, l = array.length; i < l; i++) {

      setTimeout(function() {
        $('#' + array[i] + '-tile').addClass('darken');
        setTimeout(function() {
          $('#' + array[i] + '-tile').removeClass('darken');
        }, timeFlash);
      }, i * timeWait);
    }
  }

  // User Input
  $('#green-input').click(function() {UserColors.push('green');});
  $('#red-input').click(function() {UserColors.push('red');});
  $('#blue-input').click(function() {UserColors.push('blue');});
  $('#yellow-input').click(function() {UserColors.push('yellow');});

  // User Submit
  $('#submit-answer').click(function() {
    $('#play-game').prop('disabled', false);
    $(this).prop('disabled', true).addClass('hide');

    if (MasterColors.join('') !== UserColors.join('')) {
      $('#game-result').html(`Sorry, It Was: ${MasterColors.join(', ')}`).addClass('red');
      $('#user-input-answers').html(`Your Guess: ${UserColors.join(', ')}`);
      $('#play-game').html('Play Again?').removeClass('hide');
      MasterColors = [];
    } else {
      $('#game-result').html('You Got It! Press: Go Again!').removeClass('red').addClass('green');
      $('#user-input-answers').html('');
      $('#play-game').html('Go Again!').removeClass('hide');
    }
  });

  //Play game
  $('#play-game').click(function() {
    display();
    $('#submit-answer').prop('disabled', false).removeClass('hide');
    $(this).prop('disabled', true).addClass('hide');

    // Clear data
    $('#user-input-answers, #game-result').html('');
    UserColors = [];
  });

});
