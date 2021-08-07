// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
https://github.com/mariaykim/hr-atx58-recursion-review.git

//Pingpings-iMac:hr-atx58-recursion-review pingpingxiao$ git remote add Maria https://github.com/mariaykim/hr-atx58-recursion-review.git

var stringifyJSON = function(obj) {
  // handle undefine or null cases
  if (obj === null) {
    return 'null';
  }
  //test
  if (typeof obj === 'undefined') {
    //null
    return 'null';
  }

  // handle num case
  if (typeof obj === 'number') {
    // '' + num
    return '' + obj;
  }

  // string case
  if (typeof obj === 'string') {
    //'"' +str + '"';
    return '"' + obj + '"';
  }

  // boolean case
  if (typeof obj === 'boolean') {
    //'boolean'
    return '' + obj;
  }

  if (typeof obj === 'function') {
    return 'null';
  }
  // [1, 4, true, [1,2]];
  var result = [];
  // handle arr cases
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';

  }

  // obj
  if (typeof obj === 'object') {
    for (var key in obj) {
      //check for functions
      if (typeof key === 'function' || typeof obj[key] === 'function') {
        return '{}';
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + result + '}';
  }
  return '' + obj;
};
