class Solution {
    public boolean isPalindrome(ListNode head) {
      if (head == null || head.next == null) {
        return true;
      }
      ListNode slow = head;
      ListNode fast = head;
      ListNode startReverse = null;

      //encontrar la mitad
      while(fast != null && fast.next != null){
          fast = fast.next.next;
          slow = slow.next;
      }
      if(fast != null){ //impar
        startReverse = slow.next;
      }else{ //par
        startReverse = slow;
      }

      startReverse = reverse(startReverse);

      //comparar si son iguales
      ListNode firstHalf = head;
      ListNode secondHalf = startReverse;

      while (secondHalf != null) {
        if (firstHalf.val != secondHalf.val) {
          return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
      }
      return true;
    }
    public ListNode reverse(ListNode head){
      ListNode previousNode = null;
      ListNode currentNode = head;
      while(currentNode!=null){
        ListNode nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }
      return previousNode;
    }
}
