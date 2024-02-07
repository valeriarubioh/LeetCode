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
    if(s.charAt(i) == "(" || s.charAt(i) == "[" || s.charAt(i) == "{"){
      myStack.push(s.charAt(i));
    }
    else if (s.charAt(i) === ")" || s.charAt(i) === "]" || s.charAt(i) === "}") {
      if (myStack.isEmpty()) {
        return false;
      } else if((s.charAt(i) == ")" && myStack.peek() != "(") ||
      (s.charAt(i) == "]" && myStack.peek() != "[") ||
      (s.charAt(i) == "}" && myStack.peek() != "{")){
        return false;
      }else{
        myStack.pop();
      }
    }
  }
  return myStack.isEmpty();
};

console.log(isValid("((a * c) + (b / 2))")); // True
console.log(isValid("((a * c) + (b / 2)")); // False
console.log(isValid("((a * c) + [b / 2])")); // True
console.log(isValid("((a * c) + [b / 2")); // False
