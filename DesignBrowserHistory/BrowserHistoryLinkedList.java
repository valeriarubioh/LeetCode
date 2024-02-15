class BrowserHistoryLinkedList {
    ListNode head;
    ListNode currentNode;

    public BrowserHistoryLinkedList(String homepage) {
      head = new ListNode(homepage);
      currentNode = head;
    }
    
    public void visit(String url) {
      ListNode newNode = new ListNode(url);
      newNode.prev = currentNode;
      currentNode.next = newNode;
      currentNode = newNode;
    }
    
    public String back(int steps) {
      while(steps > 0 && currentNode.prev != null){
        currentNode = currentNode.prev;
        steps--;
      }
      return currentNode.val;
    }
    
    public String forward(int steps) {
      while(steps > 0 && currentNode.next != null){
        currentNode = currentNode.next;
        steps--;
      }
      return currentNode.val;
    }
}
