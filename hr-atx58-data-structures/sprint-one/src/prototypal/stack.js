var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.top = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  pop(value) {
    if (this.top > 0) {
      this.top -= 1;
      let temp = this.storage[this.top];
      delete this.storage[this.top];
      return temp;
    }
  },

  size() {
    return this.top;
  }
};


