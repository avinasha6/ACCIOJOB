console.log("===Questions 1======")

function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  let vowelCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
}

let word = "JavaScript";
console.log(countVowels(word));

console.log("====Questions 2=====")

//isAnagram("listen", "silent");




console.log("====Questions 3=====")

// Find the missing number in an Array
// Given an array of numbers from 1 to n with one missing number, find the missing number.

const findMissingNumber = (arr) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            
        }
    }
};

findMissingNumber([1, 2, 3, 5]);