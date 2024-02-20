import java.util.Stack;
import java.util.Arrays;
class Solution {
    public String simplifyPath(String path) {
        Stack<String> folders = new Stack<>();
        String[] pathSplit = path.split("/");
        System.out.println(Arrays.toString(pathSplit)); //just checking
        StringBuilder newPath = new StringBuilder();

        for (int i = 0; i < pathSplit.length; i++) {
            String folder = pathSplit[i]; //could be just -> for (String folder : pathSplit) { code ..
            if (folder.equals("..")) {
                if (!folders.isEmpty()) {
                    folders.pop();
                }
            } else if (!folder.isEmpty() && !folder.equals(".")) {
                folders.push(folder);
            }
        }

        // Construct the simplified path from the stack
        while (!folders.isEmpty()) {
            newPath.insert(0, "/" + folders.pop());
        }

        return newPath.length() == 0 ? "/" : newPath.toString();
    }
}

