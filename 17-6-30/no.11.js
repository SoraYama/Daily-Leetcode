/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length;
  var startPoint = 0;
  var endPoint = len - 1;
  var area;
  var maxarea = 0;
  var dis, eHeight;
  for(let i = 0; i < len - 1; i++) {
    // console.log("startPoint: " + startPoint);
    // console.log("endPoint: " + endPoint);
    dis = endPoint - startPoint;
    if(height[startPoint] < height[endPoint]) {
      eHeight = height[startPoint];
      startPoint++;
    } else {
      eHeight = height[endPoint];
      endPoint--;
    }
    area = dis * eHeight;
    maxarea = area > maxarea ? area : maxarea;
    // console.log("max: " + maxarea + ", area: " + area);
  }
  return maxarea;
};

/* 最朴素的解法，然而超时了
var maxArea = function(height) {
  var eHeight;
  var dis;
  var area;
  var maxarea = 0;
  for(let i = 0; i < height.length; i++){
    for(let j = i + 1; j < height.length; j++){
      eHeight = height[i] < height[j] ? height[i] : height[j];
      dis = j - i;
      area = eHeight * dis;
      maxarea = area > maxarea ? area : maxarea;
    }
  }
  return maxarea;
};
*/

/*
  var len = height.length;
  var sortedIndexArr = [];
  var sortedArr = [];
  var maxItem = 0;
  var maxIndex = 0;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < height.length; j++){
      if(maxItem < height[j]) {
        maxItem = height[j];
        maxIndex = j;
      }
      height.splice(maxIndex, 1);
    }
    sortedArr.push(maxItem);
    sortedIndexArr.push(maxIndex);
  }
 */


var s = [1,2,7,7,2,1];
console.log(maxArea(s));
