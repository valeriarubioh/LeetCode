# Problem 
- (https://leetcode.com/problems/fizz-buzz/)
<br>

# My solution

### Java
```
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> array = new ArrayList<>();
        for(int i=1; i<=n; i++){
            if(i%3 ==0 && i%5==0){
                array.add("FizzBuzz");
            } else if(i%3==0){
                array.add("Fizz");
            }else if(i%5==0){
                array.add("Buzz");
            }else{
                array.add(String.valueOf(i));
            }
        }
        return array;
    }
}
```
### JavaScript
```
var fizzBuzz = function(n) {
    const result = [];
    for(let i=1; i<=n;i++){
        if(i%3==0 && i%5==0){
            result.push("FizzBuzz");
        } else if(i%3==0){
            result.push("Fizz");
        }else if(i%5==0){
            result.push("Buzz");
        }else{
            result.push(i.toString());
        }    
    }
    return result;
};
```

