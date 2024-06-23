/*

QUE - Reverse an array



*/

function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        // Swap elements at start and end
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp;

         // Move pointers
         start++;
         end--;
    }
    return arr;
}

let myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); // (5) [5, 4, 3, 2, 1]


/*

Explanation: 

        1. Initialization: start is set to the first index (0), and end is set to the last index (arr.length - 1).

        2. Swapping: The elements at start and end are swapped using a temporary variable temp.

        3. Pointer Movement: After swapping, start is incremented by 1, and end is decremented by 1.

        4. Loop: The process repeats until start is no longer less than end.



*/


// Dynamically ==========================================================================================

let arr = [1, 5, 8, 45, 78]
console.log(arr.reverse()); // (5) [78, 45, 8, 5, 1]