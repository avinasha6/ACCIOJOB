// let obj = {
//     10: "apple",
//     true: "banana",
//     "apple": 10,
//     banana: 20,
//     orange: 30,
//     "hello world": "cherry",
// }

// console.log(obj)

// for(let t in obj){
//     console.log(t, typeof t)
// }


// let obj = {
//     apple: 10,
//     banana: 20,
//     orange: 30,
// }

// delete obj.apple;
// console.log(obj)


// let obj = {
//     10: "apple",
//     true: "banana",
//     "apple": 10,
//     banana: 20,
//     orange: 30,
//     "hello world": "cherry",
// }

// console.log(obj[true])
// console.log(obj["true"])

// console.log(typeof obj)

let arr= [10, 20, 30, 40, 50];

// for(let t in arr){
//     console.log(t, typeof t)
// }

// console.log(typeof arr)

// console.log(arr[0])
// console.log(arr["0"])

for(let t of arr){
    console.log(t)
}