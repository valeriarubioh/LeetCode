/*
@param {number[][]} matrix
@param {number} target
@return {boolean}
*/

var searchMatrix = function(matrix, target) {
  let rows=matrix.length;
  let columns = matrix[0].length;
  // console.log(rows)
  // console.log(columns)
  let low=0;
  let high=rows*columns-1;
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  while(low<=high){
    const mid = Math.floor((high+low)/2);
    const midValue = matrix[Math.floor(mid/columns)][mid%columns]
    if(midValue===target){ //indexes
      return true;
    }else if(midValue>=target){
      high= mid-1;
    }else{
      low = mid+1;
    }
    //mid = Math.floor((high+low)/2);
  }
  return false;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
searchMatrix(matrix,target)
//Output: true
console.log(searchMatrix(matrix,target))

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
//Output: false
console.log(searchMatrix(matrix,target))
