class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.top > 0) {
      this.top -= 1;
      let temp = this.storage[this.top];
      delete this.storage[this.top];
      return temp;
    }
  }

  size() {
    return this.top;
  }

}