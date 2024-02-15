class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummyHead = new ListNode(0);  // Create a dummy head for easier handling
        dummyHead.next = head;

        ListNode currentNode = dummyHead;
        while (currentNode.next != null && currentNode.next.next != null) {
            // Swap nodes
            ListNode first = currentNode.next;
            ListNode second = currentNode.next.next;

            first.next = second.next;
            second.next = first;
            currentNode.next = second;

            currentNode = first;  // Advance to the first node of the next pair
        }

        return dummyHead.next;  // Return the actual head (not the dummy)
    }
}
