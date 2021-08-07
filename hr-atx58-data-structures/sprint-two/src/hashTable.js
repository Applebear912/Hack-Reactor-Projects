
//don't use object, use array instead
//use more space, less time
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }
    }
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var resultBucket = this._storage.get(index);
  if (resultBucket === undefined) {
    return null;
  } else {
    for (var i = 0; i < resultBucket.length; i++) {
      if (resultBucket[i][0] === k) {
        return resultBucket[i][1];
      }
    }
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = undefined;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
between O(1) to O(n)
 */


