var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    top: 0,
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function(value) {
  if (this.top > 0) {
    this.top -= 1;
    let temp = this.storage[this.top];
    delete this.storage[this.top];
    return temp;
  }
};

stackMethods.size = function(value) {
  return this.top;
};

