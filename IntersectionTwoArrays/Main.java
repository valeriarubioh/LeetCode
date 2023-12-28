/*
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

public class Main {
    public static void main(String[] args) {
        // Ejemplo de uso
        int[] nums1 = {4,9,5};
        int[] nums2 = {9,4,9,8,4};
        Solution sol = new Solution();
        System.out.println(sol.intersection(nums1,nums2));
    }
}
