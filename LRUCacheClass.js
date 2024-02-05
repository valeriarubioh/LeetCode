/** 
 * https://leetcode.com/problems/lru-cache/
 * Time O(1) | Space O(N)
 */
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);

    this.disconnectNode(node);
    this.moveToFront(node);

    return node.value;
  }

  disconnectNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  moveToFront(node) { //queda: prev<- ->node<- ->tail

    this.tail.prev.next = node; // conecta  tail.prev -> node
    node.prev = this.tail.prev; // conecta tail.prev <- node
    node.next = this.tail; // conecta node -> tail
    this.tail.prev = node; //conecta node <- tail
  }

  removeLastUsed() { //remueve this.head.next
    const [key, next, prev] = [
      this.head.next.key,
      this.head.next.next,
      this.head,
    ];

    this.map.delete(key);
    this.head.next = next;
    this.head.next.prev = prev;
  }

  put(key, value) {
    const hasKey = this.get(key) !== -1;
    const isAtCapacity = this.map.size === this.capacity;
    //caso si ya existe en el Map
    if (hasKey) return (this.tail.prev.value = value);

    //caso si no existe en el Map
    if (isAtCapacity) this.removeLastUsed();
    const newNode = new Node(key, value); // Crear un nuevo nodo
    this.map.set(key, newNode);
    this.moveToFront(newNode);
  }
}
