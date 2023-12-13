/*
@param {number[][]} firstList
@param {number[][]} secondList
@return {number[][]}
*/

var intervalIntersection = function (firstList, secondList) {
    //console.log(firstList[firstList.length - 1][1] - firstList[firstList.length - 1][0]);
    var result = new Array();
    let minList;
    let maxList;
    const minLengthList = Math.min(firstList.length, secondList.length);
    if (firstList.length >= secondList.length) {
        minList = secondList;
        maxList = firstList;
    } else {
        minList = firstList;
        maxList = secondList;
    }

    if (minLengthList == 0) {
        console.log(result);
        return result;
    }
    for (i = 0; i < minLengthList; i++) {
        const pairOne = Math.max(firstList[i][0], secondList[i][0]);
        const pairTwo = Math.min(firstList[i][1], secondList[i][1]);
        if (pairOne <= pairTwo) {
            result.push([pairOne, pairTwo]);
        }
        if (i < minLengthList-1) {
            const longSecondPairOtherList = Math.max(
                firstList[i][1],
                secondList[i][1]
            );
            const nextFirstPairOtherList = Math.min(
                firstList[i + 1][0],
                secondList[i + 1][0]
            );
            specialIntersection(
                longSecondPairOtherList,
                nextFirstPairOtherList,
                result
            );
        }
        /*const lastNumberMinList = minList[minLengthList - 1][1];
        const firsNumberPastLastNumberMinList = maxList[minLengthList][0];
        if (lastNumberMinList >= firsNumberPastLastNumberMinList) {
            specialIntersection(
                lastNumberMinList,
                firsNumberPastLastNumberMinList,
                result
            );
        }*/
    }
    console.log(result);
    return result;
};

var specialIntersection = function (
    longSecondPairOtherList,
    nextFirstPairOtherList,
    result
) {
    if (longSecondPairOtherList == nextFirstPairOtherList) {
        result.push([longSecondPairOtherList, nextFirstPairOtherList]);
    } else if (longSecondPairOtherList > nextFirstPairOtherList) {
        result.push([nextFirstPairOtherList, longSecondPairOtherList]);
    }
};

firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
intervalIntersection(firstList, secondList);
//Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

firstList = [[1,3],[5,9]],secondList = []
console.log("prueba 2 ->")
intervalIntersection(firstList, secondList);
//Output: []

firstList =[[14,16]],secondList =[[7,13],[16,20]]
intervalIntersection(firstList, secondList);
//Output:[[16,16]]