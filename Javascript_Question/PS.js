// function detict(arr) {
//     let map = new Map()
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     for (let i = 0; i <= arr.length; i++) {
//         map.set(i, 0)
//     }

//     for (let i = 0; i <= max; i++) {
//         if (map.has(arr[i])) {
//             map.set(arr[i], 1)
//         }
//     }

//     for(let [key, value] of map) {
//         if(value === 0) {
//             console.log(key);
//         }
//     }
// }


// const nums1 = [6, 0, 1, 3, 9, 5,  7];
// detict(nums1)



function findMissingNumber(nums) {
    const n = nums.length;
    
    // Initialize result with the XOR of all numbers from 0 to n
    let result = n;
  
    for (let i = 0; i < n; i++) {
      result ^= i ^ nums[i];
    }
  
    return result;
  }
  
  // Example 1
  const nums1 = [3, 0, 1];
  console.log(findMissingNumber(nums1)); // Output: 2
  
  // Example 2
  const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  console.log(findMissingNumber(nums2)); // Output: 8
  
  // Example 3
  const nums3 = [0, 1];
  console.log(findMissingNumber(nums3)); // Output: 2
  