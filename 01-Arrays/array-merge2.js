/*

QUE - Merge two array in sorted way.

Make sure that data1 and data2 are sorted before running this merge logic to get the correct sorted result in data3.
*/

let data1 = [3, 5, 8, 40, 98]; // Sorted data1
let data2 = [1, 10, 58, 65];   // Sorted data2
let data3 = []
let d1 = 0;
let d2 = 0;
let d3 = 0;


while(d1<data1.length && d2<data2.length){
    if(data1[d1] < data2[d2]){
        data3[d3] = data1[d1]
        d1++;
        // console.log(data3, 'Here Data 3') ; // [ 1, 3, 5, 8, 10, 40 ] Here Data 3
    }else{
        data3[d3] = data2[d2]
        d2++;
        // console.log(data3, 'Here Data 3 is') [ 1,  3,  5,  8,10, 40, 58, 65 ] Here Data 3 is

    }
    d3++;
}


// Add remaining elements from data1, if any
while (d1 < data1.length) {
    // console.log(d1, 'Data 1') // 4 (show 4 element are merge, and only 1 left)
    data3[d3] = data1[d1];
    d1++;
    d3++;
    
}

// Add remaining elements from data2, if any
while (d2 < data2.length) {
    data3[d3] = data2[d2];
    d2++;
    d3++;
}


console.log(data3)



