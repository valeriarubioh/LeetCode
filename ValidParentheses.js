/* param {string} s
 * return {boolean}*/


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top ? this.top.value : null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }
  isEmpty(){
    return this.bottom==null;
  }
}

var isValid = function (s) {
  const myStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == ")") {
      if (myStack.length == 0) {
        return false;
      } else {
        myStack.pop();
      }
    } else if (s.charAt(i) == "(") {
      myStack.push(s.charAt(i));
    }
  }
  return myStack.isEmpty();
};

console.log(isValid("((a * c) + (b / 2))")); //True
console.log(isValid("(()")); //False
console.log(isValid(")(")); //False
