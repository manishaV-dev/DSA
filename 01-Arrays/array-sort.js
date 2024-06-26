let arr = [5, 8, 75, 69, 47, 21, 10, 35, 65]

for(let i=0; i<arr.length; i++){
    // console.log(i); // 0 ----- 8

    for(let j=0; j<arr.length; j++){
        // console.log(j); // it runs 64 times 8*8

        // now swaping

        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }

}

console.log(arr); // [5,  8, 10, 21, 35, 47, 65, 69, 75]