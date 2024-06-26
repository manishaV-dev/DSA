// function apple(x){
//     if(x < 10){
//         apple(x++)
//     }

// }
// let num = 0;
// console.log(apple(num));


// factorial

function factorial(num){
    if(num == 0){
        return 1;
    }

    return num*factorial(num - 1)
    // 3*factorial(3 - 1)*factorial(2 - 1)*factorial(1 - 1) --> it return 1
    // 3*2*1*1
}

let value = 3; // means 3 * 2 * 1
console.log(factorial(value)); // 6 


// Loop on array with string value --- 

// let data = ['Thor', 'Spider-Man', 'Iron-Man', 'Captain-America']
// let i = 0;
// while(i < data.length){
//     console.log(data[i]);
//     i++
// }