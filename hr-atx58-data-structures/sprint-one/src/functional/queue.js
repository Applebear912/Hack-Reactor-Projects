var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  var bottom = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.dequeue = function() {
    if (top > 0) {
      let temp = storage[bottom];
      delete storage[bottom];
      bottom++;
      return temp;
    }
  };

  someInstance.size = function() {
    if (top >= bottom) {
      return top - bottom;
    } else {
      return 0;
    }
  };

  return someInstance;
};
