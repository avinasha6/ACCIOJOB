// Q1:
// let obj1 = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
// }

// check if a key "c" exists in obj or not

// check if value 70 exists in obj or not

// let key = "c"

// // console.log(obj1[key])
// if (obj1[key] == undefined) {
//     console.log("key does not exists")
// } else {
//     console.log("key exists")
// }

// console.log(key in obj1)


// let obj1 = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
// }


// let key = "c"
// let flag = false
// for(let t in obj1){
//     console.log(t, key)
//   if(t == key){
//     console.log("key exists")
//     flag = true
//     break
//   }
//   else{
//     console.log("key does not exists")
//   }
// }

// if(flag == false){
//     console.log("key does not exists")
// }

// check if value 70 exists in obj or not

// let value = 70;
// let count = false;
// for(let t in obj1){
//     console.log(t, obj1[t]);
//         if(obj1[t] == value){
//             console.log("value exists")
//             count = true
//             break
//         }
//     }


// if (count == false) {
//     console.log("value does not exists")
// }

// Quest2.

// let obj2 = {
//     a: 10,
//     b: 20,
//     c:30,
// }

// // rename key "b" to "bobbydeval"

// obj2.bobbydeval = obj2.b // 20
// delete obj2.b
// console.log(obj2)

// Quest 3

// let obj3 = {
//     a:10,
//     b:20,
//     c:30,
// }
// let obj4 = {
//     d:40,
//     e:50,
//     f:60,
// }

// // combine obj3 and obj4 into obj5

// let obj5 = {}

// for(let t in obj3){
//     let key = t
//     let value = obj3[t]
//     console.log(key, value)

//     obj5[key] = value
// }

// for (let t in obj4){
//     obj5[t] = obj4[t]
// }
// console.log(obj5)

// Q4: Take an aarray of objects, and return name sof all those people whose age is greater than 25

// let arr = [
//     {
//         name: "Ramesh",
//         age: 20,
//     },
//     {
//         name: "Suresh",
//         age: 30,
//     },
//     {
//         name: "Mohan",
//         age: 25,
//     },
//     {
//         name: "Rohan",
//         age: 35,
//     }
// ]


// // solutions---

// for(let t of arr) {
//     if(t.age>25){
//         console.log(t.name)
//     }
// }


// test question 2.
let n = 100
let count = 0

for(let i=1; i<=n; i++){
    if(checkPrime(i) == true){
        console.log(i)
        count += i
    }
}

console.log(count);

function checkPrime(num){
    let count = 0
    for(i = 1; i<=num; i++){
        if(num%i == 0){
            count++;
        }
    }

    if(count == 2){
        return true
    }
    else{
        return false
    }
}

checkPrime(10)
