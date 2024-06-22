/*

Que : Delete an element in array on index 2.

*/

// 1. Manually ---------------------------------------------------------------------------------------

let newArr = [12, 45, 65, 89, 67, 99]
let positiion = 3;

for(let i=positiion; i<newArr.length -1; i++){
    // now put i's next value in i
    newArr[i] = newArr[i + 1]

    // output - (6) [12, 45, 65, 67, 99, undefined], [delete the element but get undefined] to avoid undefined, use newArr.length - 1, instead of newArr.length

    // now output - (6) [12, 45, 65, 67, 99, 99] -- [delete the element but get 2 times of last element] here we can see 2 times of last element

    // to fixed this issue we have to fixed the length of array
}

newArr.length = newArr.length - 1
// now outPut - (5) [12, 45, 65, 67, 99]

console.log(newArr);

// In Input Field -------------------------------------------------------------------------------



function deleteEl(){
    let data = [1, 5, 69, 8, 4, 65]
    let delPos = document.getElementById('delPos').value;
    let result = document.getElementById("show");


    // Check if inputPosition and newElement are valid numbers
    if(isNaN(delPos)){
        alert('Position must be numbers');
        return
    }
    // Convert deletePosition to numbers
    delPos = parseInt(delPos)

    if(delPos < 0 || delPos > data.length){
        alert("Position must be within the valid range.");
        return;
    }

    for(let i= delPos; i < data.length -1; i++){
        data[i] = data[i+1];
    }

    data.length = data.length - 1;

    result.textContent = data;
}

