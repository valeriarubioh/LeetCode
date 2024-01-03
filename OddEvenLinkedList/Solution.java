class Solution {
    public ListNode oddEvenList(ListNode head) {
      if (head == null || head.next == null) {
        return head;
      }
      ListNode firstNode = head;
      ListNode firstEvenNode = head.next;
      ListNode odd = head;
      ListNode even = head.next;
      while(odd != null && even != null && odd.next != null && even.next != null){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
      }
      odd.next = firstEvenNode;
      return firstNode;
    }
}
