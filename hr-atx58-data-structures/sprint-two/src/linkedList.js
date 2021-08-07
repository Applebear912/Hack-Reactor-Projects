var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    //adds to the end of the list
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    // if (this.head === null) {
    //   this.head = this.tail;
    // }
  };

  list.removeHead = function() {
    //removes the first node from the list and returns its value
    let oldHead = this.head;
    let newHead = this.head.next;
    delete this.head;
    this.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    // returns boolean reflecting whether or not the passed-in value is in the linked list
    //base cases
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.tail.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// Complexity: What is the time complexity of the above functions?
// add and remove is constant, while contains method is linear time complexity
