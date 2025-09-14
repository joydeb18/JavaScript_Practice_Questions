let arr1 = [1,2,4];
let arr2 = [5,6,7];

let combinationArr= arr1.concat(arr2);

console.log(combinationArr);


//Second Method

let combinationArr2 = [...arr1, ...arr2];

console.log(combinationArr2);