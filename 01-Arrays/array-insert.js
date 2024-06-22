/*

Que : Insert an element in array on index 2.

    [1, 2, 3, 5, 6, 7]
    [1, 2, 3, 4, 5, 6, 7]

Approach -- Here we use reverse loop to add element, means loop starts from last element of an array.


*/

// 1. Manually Approach ---------------------------------------------------------------------------------------------------------

let element = [42, 56, 85, 95, 24, 10, 80]
let newEl = 69;
let position = 2;

// console.log(element); // (7) [42, 56, 85, 95, 24, 10, 80]

// position 2 par jate hi loop band ho jayega as we add conditional statement
for(let i= element.length - 1; i>= 0; i--){
    //element.length - 1 --- to get exact length if we use only element.length we get undefined

    // here if position is greater or equal to 2 then this block of code run
    if(i >= position){
        element[i + 1] = element[i]
        // i+1 == means jo next position rhegi usme i ko push kr dega so we have a space for 2nd position
        // here output will be --- (8) [42, 56, 85, 85, 95, 24, 10, 80]

        // now as we get a position, we add new element to that positiion
        if(i == position){
            element[i] = newEl
            // here output will be --- (8) [42, 56, 69, 85, 95, 24, 10, 80]
        }
    }
}

console.log(element);


// for input field -----------------------------------------------------------------------------------------------


let data = [24, 56, 47, 98, 86, 45];
function insertEl() {
  let inputPosition = document.getElementById("position").value;
  let newElement = document.getElementById("newElement").value;
  let result = document.getElementById("show");

  // Check if inputPosition and newElement are valid numbers
  if (isNaN(inputPosition) || isNaN(newElement)) {
    alert("Both position and new element must be numbers.");
    return;
  }
  
  // Convert inputPosition and newElement to numbers
  inputPosition = parseInt(inputPosition);
  newElement = parseInt(newElement);

  // Check if inputPosition is within the valid range
  if (inputPosition < 0 || inputPosition > data.length) {
    alert("Position must be within the valid range.");
    return;
  }

  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= inputPosition) {
      data[i + 1] = data[i];

      if (i == inputPosition) {
        data[i] = newElement;
      }
    }
  }

  result.textContent = data;
}

// 2. By Javascript in-built method (splice) ----------------------------------------------------------------------

let newArr = [54, 78, 56, 89, 99]
newArr.splice(2, 0, 1000)
// splice(index, deleteElement, insertElement)
console.log(newArr); //  [54, 78, 1000, 56, 89, 99]