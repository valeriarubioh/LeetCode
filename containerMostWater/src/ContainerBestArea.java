public class ContainerBestArea {
    public static int bestArea(int[]alturas){
        int maxArea = 0;
        int left = 0;
        int right = alturas.length -1;

        while (left<right){
            int minHeight = Math.min(alturas[left], alturas[right]);
            int area = (right - left) * minHeight;
            if (area > maxArea) {
                maxArea = area;
            }
            if (alturas[left] > alturas[right]) {
                right--;
            } else {
                left++;
            }
        }
        return maxArea;
    }
}
