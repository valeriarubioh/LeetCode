public class Main {
    public static void main(String[] args) {
        // Ejemplo de uso
        int[] nums = {0,0,1,1,1,2,2,3,3,4};
        Solution sol = new Solution();
        System.out.println(sol.removeDuplicates(nums));
        for(int i=0;i<nums.length;i++){
          System.out.println(nums[i]);
        }
    }
}
