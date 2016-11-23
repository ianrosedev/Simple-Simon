$(function() {

  $('#test-bed').html('Testing 123');

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

  $('#play-game').click(() => display());

});
