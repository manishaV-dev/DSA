# Array Traversing
Traversing an array means going through each element of the array, typically for the purpose of performing an operation 
on each element, such as printing it, modifying it, or using it in some computation.

### Example of Array Traversing

1. Using For Loop

        let fruits = ["apple", "banana", "orange"];
            for (let i = 0; i < fruits.length; i++) {
                console.log(fruits[i]);
            }
        // Output:
        // "apple"
        // "banana"
        // "orange"

2. Using forEach Method

        let fruits = ["apple", "banana", "orange"];
            fruits.forEach(function(fruit) {
                    console.log(fruit);
        });
        // Output:
        // "apple"
        // "banana"
        // "orange"


# Array Accessing
Accessing an array element means retrieving the value at a specific index in the array. In JavaScript, arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

### Example of Array Accessing
1. Accessing elements by index

        let fruits = ["apple", "banana", "orange"];
        console.log(fruits[0]); // "apple"
        console.log(fruits[1]); // "banana"
        console.log(fruits[2]); // "orange"

2. Modifying elements by index

        let fruits = ["apple", "banana", "orange"];
        fruits[1] = "grape"; // Change "banana" to "grape"
        console.log(fruits); // ["apple", "grape", "orange"]

## Combining Traversing and Accessing
Often, traversing and accessing are combined when iterating through an array to read or modify each element.

### Example of Combining Traversing and Accessing

1. Using a for loop to modify each element

        let numbers = [1, 2, 3, 4];
        for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2; // Double each element
        }
        console.log(numbers); // [2, 4, 6, 8]

2. Using forEach to access each element

        let numbers = [1, 2, 3, 4];
        numbers.forEach(function(number, index) {
        numbers[index] = number * 2; // Double each element
        });
        console.log(numbers); // [2, 4, 6, 8]


## Summary

- Traversing an array involves iterating over each element in the array.
- Accessing an array involves retrieving or modifying the value at a specific index.