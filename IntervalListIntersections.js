/*
@param {number[][]} firstList
@param {number[][]} secondList
@return {number[][]}
*/

var intervalIntersection = function (firstList, secondList) {
    var result = new Array();
    let p1=0;
    let p2=0;
    while(p1<firstList.length && p2<secondList.length){
        const pairOne = Math.max(firstList[p1][0], secondList[p2][0]);
        const pairTwo = Math.min(firstList[p1][1], secondList[p2][1]);
        if (pairOne <= pairTwo) {
            result.push([pairOne, pairTwo]);
        }
        if(firstList[p1][1]<secondList[p2][1]){
            p1++;
        }else{
            p2++;
        }    
    }
    console.log(result)
    return result;    
};


firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
intervalIntersection(firstList, secondList);
//Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

firstList = [[1,3],[5,9]],secondList = []
intervalIntersection(firstList, secondList);
//Output: []

firstList =[[14,16]],secondList =[[7,13],[16,20]]
intervalIntersection(firstList, secondList);
//Output:[[16,16]]