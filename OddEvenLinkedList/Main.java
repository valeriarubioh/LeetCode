public class Main {
    public static void main(String[] args) {
        // Ejemplo de uso
        ListNode nodo1 = new ListNode(1);
        ListNode nodo2 = new ListNode(2);
        ListNode nodo3 = new ListNode(3);
        ListNode nodo4 = new ListNode(4);
        ListNode nodo5 = new ListNode(5);
        nodo1.next = nodo2;
        nodo2.next = nodo3;
        nodo3.next = nodo4;
        nodo4.next = nodo5;

        Solution sol = new Solution();
        ListNode nuevoNodo1 = sol.oddEvenList(nodo1);

        // Output (1->3->2->4)
        System.out.println(nuevoNodo1.next.val); // nodo3
        System.out.println(nuevoNodo1.next.next.val); // nodo5
        System.out.println(nuevoNodo1.next.next.next.val); // nodo2
        System.out.println(nuevoNodo1.next.next.next.next.val); // nodo4
        System.out.println(nuevoNodo1.next.next.next.next.next); // null

        //System.out.println(sol.oddEvenList(list));
    }
}
