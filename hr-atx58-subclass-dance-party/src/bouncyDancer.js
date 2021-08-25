var MakeBouncyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  var imageIdx = Math.ceil(Math.random() * 6);
  var $image = $('<img src="img/dancer/' + imageIdx + '.gif">');
  this.$node.append($image);
  this.$node.css('border', 'none');

};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.oldStep = MakeBouncyDancer.prototype.step;
MakeBouncyDancer.prototype.step = function(timeBetweenSteps) {
  this.oldStep();
};


// MakeBouncyDancer.prototype.images = function() {
//   // console.log("Inserting Images");
//   var imageIdx = Math.ceil(Math.random() * 6);
//   var $image = $('<img src="img/dancer/' + imageIdx + '.gif">');
//   this.$node.append($image);
//   this.$node.css('border', 'none');
// };

//img/dancer/0.gif
