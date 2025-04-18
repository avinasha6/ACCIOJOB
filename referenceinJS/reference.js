// let arr = [10, 20, 30, 40]
// let brr = arr
// arr[0]=100
// console.log(arr, brr);

// let arr = 1000
// let brr = arr
// let crr = brr
// brr[1] = 1000
// console.log(crr);


// let arr = [10, 20, 30, 40]
// // let brr = arr

// let brr = []

// for (let i = 0; i<=arr.length-1; i++){
//     brr[i] = arr[i]
// }

// console.log(arr, brr);


// spread operator
// let arr = [10, 20, 30, 40]

// // let brr = [...arr]

// let brr = [100, 200, ...arr, 300]

// //console.log(arr == brr);
// console.log(brr);


let arr = [10, 20, [30, 40], 50, 60, 70, 80, 90, 100]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
let t = arr[2]
console.log(t[0])
console.log(arr[3])

let brr = []
for (let i = 0; i <= arr.length - 1; i++) {
    brr[i] = arr[i]
}