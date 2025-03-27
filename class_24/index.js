console.log("=== Longest Increasing Subsequence ===");

// const arr = [3, 10, 2, 1, 30];
// o/p: 3
// const arr = [30, 20, 10];
// o/p: 1
// const arr = [2, 2, 2];
// o/p: 1
// const arr = [10, 20, 35, 80];
// o/p: 4

// const arr = [30, 1, 2, 50, 60, 3, 4, 50];
// let max = 0;
// for (let i = 0; i<arr.length; i++) {
//     let count = 1;
//     for (let j = i+1; j<arr.length; j++) {
//         if(arr[i]<arr[j]){
//             count++;
//         }
//     }
//     if(count>max) {
//         max = count;
//     }
// }
// console.log(max);



//const getLongestIncreasingSubsequence = (arr) => {
    // const len = [];
    // for (let i = 0; i<arr.length; i++) {
    //     len.push(1);
    // }
    // console.log(len);

// const len = new Array(arr.length).fill(1);
// console.log(len);

// for(let i = 1; i < arr.length; i++) {
//     for(let j = 0; j<i; j++) {
//         if(arr[i] > arr[j]) {
//             len[i] = Math.max(len[i], len[j] + 1);
//         }
//     }
// }
// console.log(len);
// return Math.max(...len);
// };

// const arr = [30, 1, 2, 50, 60, 3, 4, 50];
// console.log(getLongestIncreasingSubsequence(arr));



// console.log("=== Questions2 ===");

// Edit distance
// const s1 = "geek"
// const s2 = "gesek"
// 1

// const s1 = "geek";
// const s2 = "gesek";
// const a1 = s1.split("");
// const a2 = s2.split("");

// console.log("=== Questions3 ===");

// const nums = [2, 7, 11, 15];
// const arr = [];
// let target = 9;
// for (i = 0; i<nums.length; i++) {
//     let res = nums[i];
//     for (j = 1; j<nums.length; j++){
//         if(nums[i]+nums[j]<target) {
//             continue;
//         }
//     }
//     else if(nums[i] + nums[j]>target)
//     }

// console.log("=== Questions4 ===");

// const arr = [4, 5, 2, 10, 8];

// let str = "hello"
// let s1 = ""
// for (let i = 0; i<str.length-1; i--){
//     s1 = str[i] + s1;
// }
// console.log(s1);

// let s1 = "456"
// let s2 = "321"

// "777"

console.log("==== Factorial questions =====")

function fact(n){
    if (n === 1){
        return 1;
    }
    return n *fact(n-1);
}
fact(7);


function countDown(n) {
    if (n === 0) {
        console.log("launch");
    }
    console.log(n)
    return countDown(n-1);
}
