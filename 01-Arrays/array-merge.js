/*

QUE - Merge two array


*/

let arr1 = [25, 56, 87, 59, 24, 36, 98 ]
let arr2 = [57, 74, 68, 99, 100, 50, 67]
let arr3 = [];

// 1. just copy one array elements to the other array
for (let i = 0; i < arr1.length; i++) {
   arr3[i] = arr1[i] // console.log(arr3);  (7) [25, 56, 87, 59, 24, 36, 98]
}

// 2. again use for loop to add element of arr2 with arr1 in arr3

for(let i=0; i< arr2.length; i++){
    // means arr3 me jo arr1 ki jo elements hai wo rhe sath me arr2 ki bhi element add ho jaye
    // console.warn(arr1.length + i); // 7,8,9,10,11,12,13
    arr3[arr1.length + i] = arr2[i]
}

console.log(arr3); // [25, 56, 87, 59, 24, 36, 98, 57, 74, 68, 99, 100, 50, 67]


// Dynamically ==========================================================================================

let myArr1 = [1, 5, 8, 45, 78]
let myArr2 = [11, 51, 84, 445, 478];

let myArr3 = [...myArr1, ...myArr2]
console.log(myArr3); // [1, 5, 8, 45, 78, 11, 51, 84, 445, 478]