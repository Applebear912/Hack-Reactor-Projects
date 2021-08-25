$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // to speed up test, click 10 times
    // create a count var
    var count = 0;

    var createTen = function(count) {
      // base case
      // stop when count reaches 10
      if (count === 3) {
        return;
      } else {
        // recursive case
        // recall the dance to the stage
        var dancer = new dancerMakerFunction(
          $('body').height() * Math.random(), //left
          $('body').width() * Math.random(), //right
          Math.random() * 1000 //timeout num
        );
        $('body').append(dancer.$node);
        count++;
        return createTen(count);

      }
    };

    createTen(count);

  });


  var generateColors = function () {
    var randomNum = function(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    };
    var r = randomNum(0, 255);
    var g = randomNum(0, 255);
    var b = randomNum(0, 255);

    return 'rgb(${r}, ${g}, ${b})';
  };

});

