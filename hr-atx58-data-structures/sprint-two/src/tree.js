var Tree = function(value) {
  var newTree = {
    value: value,
    children: [] // fix me
  };
  // your code here
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //use recursion
  let result = false;

  var helperFunc = function(children) {
    //check root value first
    if (children.value === target) {
      result = true;
    } else {
      _.each(children.children, helperFunc);
    }
  };
  helperFunc(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
from Quadratic to O(c**n)
 */
