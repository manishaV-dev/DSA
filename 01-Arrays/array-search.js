/*

Que : Search an element in array by index

*/

// 1. Manually ---------------------------------------------------------------------------------------

let arr = [10, 50, 47, 60, 89, 70, 99]
let item = 60;
let index = undefined;
for(let i=0; i<arr.length -1; i++){
    // check jab loop chal rha ho to kya arr me i ki value match ho rha hai item ke saths
    if(arr[i] === item){
        index = i;
        break;
    }
}
console.log(index); // 3


// 2. By using array method indexOf ---------------------------------------------------------------------------------------
let arr2 = [10, 50, 47, 60, 89, 70, 99]
console.log(arr2.indexOf(50)); // 1






// 2. By using Reducer function which is the default function of js --------------------------------------------------------------

let data = [10, 20, 30, 40, 50, 60, 70, 80, 40];
const targetValue = 40;
const indices = data.reduce((accumulator, element, index) => {
  if (element === targetValue) {
    accumulator.push(index);
  }
  return accumulator;
}, []);
console.log(indices); // (2) [3, 8]