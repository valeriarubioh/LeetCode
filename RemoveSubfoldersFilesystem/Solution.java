import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;
class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Stack<String> folders = new Stack<>();
        Arrays.sort(folder); //para comparar en orden lexico
        for(String f : folder){
          if(folders.isEmpty()|| !f.startsWith(folders.peek()+ '/')){
            folders.push(f);
          }
        }
        return new ArrayList<>(folders);
    }
}
