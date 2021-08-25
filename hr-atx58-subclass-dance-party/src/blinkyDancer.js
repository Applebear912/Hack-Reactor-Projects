// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // invoke step from the parent
  // step();
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinky"></span>');

  // invoke the setPosition method here
  // this.setPosition();
};
// we are setting this to be able to call the parent version of step
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.oldStep = MakeBlinkyDancer.prototype.step;


MakeBlinkyDancer.prototype.step = function() {
  // timeBetweenSteps
  // MakeDancer.prototype.step.call(this); // how to properly call the prototype fn
  this.oldStep(); //current one
  this.$node.toggle();
};

// look up call, apply, this
