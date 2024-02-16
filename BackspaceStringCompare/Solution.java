import java.util.Stack;
class Solution {
    public boolean backspaceCompare(String s, String t) {
      Stack<Character> sEdited = new Stack<>();
      Stack<Character> tEdited = new Stack<>();
      boolean state = true;

      for(int i = 0 ; i < s.length() ; i++){
        if(s.charAt(i) == '#'){
         if(!sEdited.isEmpty()){
            sEdited.pop();
          }
        }else{
          sEdited.push(s.charAt(i));
        }
      }
      for(int i = 0 ; i < t.length() ; i++){
        if(t.charAt(i)  == '#'){
          if(!tEdited.isEmpty()){
            tEdited.pop();
          }
        }else{
          tEdited.push(t.charAt(i));
        }
      }
      if(sEdited.size() == tEdited.size()){
        while(!sEdited.isEmpty()){
          char currentS = sEdited.pop();
          char currentT = tEdited.pop();
          if(currentS != currentT){
            state = false;
            return state;
          }
        }
      }else{
        state = false;
      }
      return state;
    }
}
