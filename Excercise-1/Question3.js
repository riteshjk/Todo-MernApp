/*
Question 3.
Given that you are using JavaScript.
Write some code to remove duplicates in an array and output the unique values.
Input:
[ 1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1 ]
Output:
[ 1, 2, 3, 6, 4, 7, 8, 5, 9, 0]
*/


let arr = [ 1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1 ];

let obj = {}; 
let tank = [];

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = true; 
    tank.push(arr[i]); 
  }
}

console.log(tank); 


// function removeDuplicates(arr) {
//     const uniqueSet = new Set(arr);
  
//     return [...uniqueSet];
//   }
  
//   console.log(removeDuplicates(arr));



/*
Explanation: In Object-Based approach The code iterates through the array. If an element isn't seen before (not a key in the obj object),
 it's added to both obj and the tank array (containing unique values).

Alternative (Sets): Using a Set is more efficient. Sets inherently store unique values, so no extra checks are needed during iteration.
 You can create a Set from the array and convert it back to an array if necessary. 
*/
