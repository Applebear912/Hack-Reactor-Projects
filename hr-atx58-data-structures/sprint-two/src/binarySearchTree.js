class BinarySearchTree {
  // should have methods named "insert", "contains", and "depthFirstLog
  //A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }


  insert(value) {
    // console.log(this.nodes);
    // use recursion
    // if no children
    // do insert
    // else call insert function again
    let searchForInsert = function(currentNode) {
      // console.log(currentNode.right);
      // console.log(currentNode.nodes.value);
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = new BinarySearchTree(value);
          return;
        }
        currentNode.left.insert(value);
      }

      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = new BinarySearchTree(value);
          return;
        }
        currentNode.right.insert(value);
      }

    };
    // console.log(this.nodes.value); //output is 5;

    searchForInsert(this);
  }

  contains(target) {
    let searchForTarget = function(currentNode) {
      if (!currentNode) {
        return false;
      }
      if (currentNode.value === target) {
        return true;
      }
      if (target < currentNode.value) {
        return searchForTarget(currentNode.left);
      }
      if (target > currentNode.value) {
        return searchForTarget(currentNode.right);
      }
    };
    //contain function needs a return value, don't forget 'return'
    return searchForTarget(this);
  }


  depthFirstLog(cb) {
    var result = [];
    // apply cb on every node in the tree
    let cbOnAllNodes = function(currentNode) {
      // console.log(currentNode.value);
      if (currentNode) {
        result.push(cb(currentNode.value));
        cbOnAllNodes(currentNode.left);
        cbOnAllNodes(currentNode.right);
      }
    };
    cbOnAllNodes(this);
    return result;
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
Quadratic
 */
