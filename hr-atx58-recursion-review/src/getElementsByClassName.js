// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // You should use document.body, element.childNodes, and element.classList
  var node = document.body;
  var result = [];

  var hasClassName = function(node) {
    //base case
    if (node.classList && node.classList.length !== 0) {
      if (node.classList.contains(className)) {
        result.push(node);
      }
    }

    if (node.hasChildNodes()) {
      var kids = node.childNodes;
      kids.forEach(child => hasClassName(child));
    }
  };

  hasClassName(node);
  return result;
};
