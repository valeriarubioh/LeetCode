public class Main {
    public static void main(String[] args) {
        // Ejemplo de uso
        ListNode nodo1 = new ListNode(1);
        ListNode nodo2 = new ListNode(9);
        ListNode nodo3 = new ListNode(5);
        ListNode nodo4 = new ListNode(1);

        nodo1.next = nodo2;
        nodo2.next = nodo3;
        nodo3.next = nodo4;

        Solution sol = new Solution();
        System.out.println(sol.isPalindrome(nodo1));

    }
}
