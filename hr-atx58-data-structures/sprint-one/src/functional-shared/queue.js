var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    top: 0,
    bottom: 0
  };

  // use _.extend to link someInstance with current queueMethods)
  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

queueMethods.dequeue = function() {
  if (this.top >= 0) {
    let temp = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return temp;
  }
};

queueMethods.size = function() {
  if (this.top >= this.bottom) {
    return this.top - this.bottom;
  } else {
    return 0;
  }
};
