var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.top = 0;
  instance.bottom = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  dequeue() {
    if (this.top > 0) {
      let temp = this.storage[this.bottom];
      delete this.storage[this.bottom];
      this.bottom++;
      return temp;
    }
  },

  size() {
    if (this.top > this.bottom) {
      return this.top - this.bottom;
    } else {
      return 0;
    }
  }
};


