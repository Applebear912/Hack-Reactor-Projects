/* my understanding of undirected graph is like this...
var graph = {

  node1(use its value as key) : {
    value1: value1,
    node1.edges: {
      someValue : someValue
    },
    node2.value1: value1,
    node2.edges: {
      someValue : someValue
    },
    (and more...)
  }
};
*/

// Instantiate a new graph
var Graph = function() {
  // It is an undirected graph. It does not have to be 'connected'.
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // each node should have a value property and a connections property that shows how many other nodes is associated.
  let newNode = {};
  newNode.value = value;
  newNode.edges = {};
  this.nodes[value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  // strat with checking the root?
  // than look for connections
  // if found, return true
  // else return false
  if (this.nodes[value]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  // Part 1: we need to find the node that needs to be deleted
  // _.find(list, predicate)
  // find the index of the target item
  // Part 2: remove connections
  // use splice(start, deleteCount) to remove target item
  // if (indexOfTarget !== -1) {
  //   this.nodes.splice(indexOfTarget, 1);
  // }
  // console.log(node); => output is 2, so I rename it to value instead of node for clarification

  delete this.nodes[value];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if fromNode.value is in toNode.edges array or the other way around since this is an undirected graph
  // console.log(fromNode, toNode); => output is 2, 5 they are all numeric values instead of node objs

  //checked if any of the node has been deleted
  if (this.nodes[fromNode] === undefined || this.nodes[toNode] === undefined) {
    return false;
  }

  if (this.nodes[fromNode].edges[toNode]) {
    return true;
  } else if (this.nodes[toNode].edges[fromNode]) {
    return true; // since it is an undirected graph
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    It is O(1) constant for add or remove and check edges, but when applying cb function to each node, it becomes linear O(n)
 */


// var test = new Graph();
// var test2 = new Graph();
// test.addNode(1);
// test.addNode(2);
// test2.addNode(3);
// console.log(test);