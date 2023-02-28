const arr = [3, 4, 5, 6, 12, -6];

// let multiplication = 1;
// for (let i = 0; i < arr.length; i++) {
//     multiplication *= arr[i];
// } 

// console.log(multiplication);


// let q = 1;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     q = arr[i] ** 2;
//     sum += q;
// }

// console.log(sum);

// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let min = arr[0];

//  for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//          min = arr[i];
//      }
// }
//  console.log(min);


// let sum = 0;
// let sumOfAll = arr.length;
// let avg = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     avg = sum / sumOfAll;
// } 
// console.log(avg);

let sumOfPositive = 0;

for (let i = 0; i <arr.length; i++) {
    if (arr[i] > 0) {
        sumOfPositive += 1;
    }
}

console.log(sumOfPositive);

