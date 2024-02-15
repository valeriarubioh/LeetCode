/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let pointer1 = l1;
  let pointer2 = l2;
  let current = head;
  let carry = 0;

  while (pointer1 || pointer2) {
    let x = pointer1 ? pointer1.val : 0;
    let y = pointer2 ? pointer2.val : 0;
    let currentSum = carry + x + y;

    carry = Math.floor(currentSum / 10);
    current.next = new ListNode(currentSum % 10);
    current = current.next;

    if(pointer1) pointer1 = pointer1.next;
    if(pointer2) pointer2 = pointer2.next;
  }
  if (carry) current.next = new ListNode(carry);
  return head.next;
};

// Casos de prueba
let nodo1 = new ListNode(2);
nodo1.next = new ListNode(4);
nodo1.next.next = new ListNode(3);

let nodo2 = new ListNode(5);
nodo2.next = new ListNode(6);
nodo2.next.next = new ListNode(4);

let resultado = addTwoNumbers(nodo1, nodo2);

console.log(resultado);

/*console.log(addTwoNumbers(l1,l2)); //expected output [7,0,8]
l1= [0];
l2 = [0];
console.log(addTwoNumbers(l1,l2)); //expected output [0]
l1= [9,9,9,9,9,9,9];
l2 = [9,9,9,9];
console.log(addTwoNumbers(l1,l2)); //expected output [8,9,9,9,0,0,0,1]*/
