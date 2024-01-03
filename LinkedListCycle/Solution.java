public class Solution {
    public boolean hasCycle(ListNode head) {
      ListNode slow = head;
      ListNode fast = head;
      while(fast != null && fast.next != null){
        if(fast.next == slow || fast.next.next ==slow){
          return true;
        }
        slow = slow.next;
        fast = fast.next.next;
      }
      return false;
    }
}
