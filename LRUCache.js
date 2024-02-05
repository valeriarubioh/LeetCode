/*
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

Input:
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

Output:
[null, null, null, 1, null, -1, null, -1, 3, 4]
*/
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;

  const node = this.map.get(key);

  this.disconnectNode(node);
  this.moveToFront(node);

  return node.value;
};

LRUCache.prototype.put = function(key, value) {
  const hasKey = this.get(key) !== -1;
  const isAtCapacity = this.map.size === this.capacity;

  if (hasKey) return (this.tail.prev.value = value);

  if (isAtCapacity) this.removeLastUsed();
  const newNode = new Node(key, value);
  this.map.set(key, newNode);
  this.moveToFront(newNode);
};

LRUCache.prototype.removeLastUsed = function(){
  const [key, next, prev] = [
    this.head.next.key,
    this.head.next.next,
    this.head,
  ];

  this.map.delete(key);
  this.head.next = next;
  this.head.next.prev = prev;
};

LRUCache.prototype.moveToFront = function(node){
  this.tail.prev.next = node;
  node.prev = this.tail.prev;
  node.next = this.tail;
  this.tail.prev = node;
};

LRUCache.prototype.disconnectNode = function(node){
  node.next.prev = node.prev;
  node.prev.next = node.next;
}

const lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // cache is {2=1}
lRUCache.put(1, 1); // cache is {2=1, 1=1}
lRUCache.put(2, 3); // cache is {1=1, 2=3}
lRUCache.put(4, 1); // cache is {2=3, 4=1}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(2));    // returns 3
