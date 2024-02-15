import java.util.Stack;

class BrowserHistory {
  Stack<String> backHistory;
  Stack<String> forwardHistory;
  String currentPage;

    public BrowserHistory(String homepage) {
      backHistory = new Stack<>();
      forwardHistory = new Stack<>();
      currentPage = homepage;
    }
    
    public void visit(String url) {
      backHistory.push(currentPage);
      forwardHistory.clear();
      currentPage = url;
    }
    
    public String back(int steps) {
      while(!backHistory.isEmpty() && steps > 0){
        forwardHistory.push(currentPage);
        currentPage = backHistory.pop();
        steps--;
      }
      return currentPage;
    }
    
    public String forward(int steps) {
      while(!forwardHistory.isEmpty() && steps > 0){
        backHistory.push(currentPage);
        currentPage = forwardHistory.pop();
        steps--;
      }
      return currentPage;
    }
}
