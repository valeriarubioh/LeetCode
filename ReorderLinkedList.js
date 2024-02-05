function Node(value, next) {
    this.value = (value===undefined ? 0 : value);
    this.next = (next===undefined ? null : next);
}

var reorderList = function (head) {
  if(!head || !head.next|| !head.next.next){
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next){
    fast = fast.next.next;
    slow = slow.next;
  }
  let currentNode = slow.next;
  slow.next = null;
  let previousNode = null;
  let nextNode;
  while(currentNode!=null){
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  let p1 = head;
  let p2 = previousNode;
  while(p2){
    nextNode = p1.next;
    p1.next = p2;
    p2 = p2.next;
    p1.next.next = nextNode;
    p1 = nextNode;
  }

  return head;
}
