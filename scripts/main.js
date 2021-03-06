$(function() {

  let CpuColors = [],
      UserColors = [],
      timeWait = 1000,
      timeFlash = 500,
      speedUpEvery = 3,
      clickable = false;

  // Array of colors
  function colorsArray() {
    const colors = ['green', 'red', 'blue', 'yellow'];

    return (function() {
      CpuColors.push(colors[Math.floor(Math.random() * 4)]);
      return CpuColors;
    })();
  }

  // Makes the tiles flash
  function display() {
    let array = colorsArray();
    let l = array.length;

    if (l > 1 && speedUpEvery < 16 && (l - 1) % speedUpEvery === 0) {
      timeWait -= 200;
      timeFlash -= 100;
      speedUpEvery += 3;
    }

    for (let i = 0; i < l; i++) {
      setTimeout(function() {
        $('#' + array[i] + '-tile').addClass('darken');
        setTimeout(function() {
          $('#' + array[i] + '-tile').removeClass('darken');
          if (i === l - 1) clickable = true;
        }, timeFlash);
      }, i * timeWait);
    }
  }

  // User Input
  $('#green-tile').on('mousedown', function() {
    if (clickable) {
      UserColors.push('green');
      $('#green-tile').addClass('darken');
      setTimeout(function() {
        $('#green-tile').removeClass('darken');
      }, 205);
    }
  });

  $('#red-tile').on('mousedown', function() {
    if (clickable) {
      UserColors.push('red');
      $('#red-tile').addClass('darken');
      setTimeout(function() {
        $('#red-tile').removeClass('darken');
      }, 205);
    }
  });

  $('#blue-tile').on('mousedown', function() {
    if (clickable) {
      UserColors.push('blue');
      $('#blue-tile').addClass('darken');
      setTimeout(function() {
        $('#blue-tile').removeClass('darken');
      }, 205);
    }
  });

  $('#yellow-tile').on('mousedown', function() {
    if (clickable) {
      UserColors.push('yellow');
      $('#yellow-tile').addClass('darken');
      setTimeout(function() {
        $('#yellow-tile').removeClass('darken');
      }, 205);
    }
  });

  // User Submit
  $('#submit-answer').on('click', function() {
    $(this).prop('disabled', true).addClass('hide');
    $('#play-game').prop('disabled', false).removeClass('hide');

    if (CpuColors.join('') !== UserColors.join('')) {
      clickable = false;
      $('#result').addClass('red');
      $('#game-result').html(`Sorry, it was: ${CpuColors.join(', ')}`);
      $('#user-input-answers').html(`Your Guess: ${UserColors.join(', ') || 'At least try to guess!'}`);
      $('#play-game').html('Play Again?');

      // Reset data
      CpuColors = [];
      timeWait = 1000,
      timeFlash = 500,
      speedUpEvery = 3;

    } else {
      clickable = false;
      $('#result').addClass('green');
      $('#game-result').html('You Got It! Press: Go Again!');
      $('#user-input-answers').html('');
      $('#play-game').html('Go Again!');
    }
  });

  // Play game
  $('#play-game').on('click', function() {
    display();
    $(this).prop('disabled', true).addClass('hide');
    $('#submit-answer').prop('disabled', false).removeClass('hide');

    // Clear data
    $('#result').removeClass();
    $('#user-input-answers, #game-result').html('');
    UserColors = [];
  });

});
