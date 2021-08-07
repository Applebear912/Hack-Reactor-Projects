var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    if (top > 0) {
      top -= 1;
      let temp = storage[top];
      delete storage[top];
      return temp;
    }
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};
