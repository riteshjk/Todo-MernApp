/*Question 2.
Given that you are using JavaScript.
Write some code to reverse characters in a string
input:
"Bhaskara"
output:
"araksahB"
Note:
*/

const reverseStr = (str) =>{
    let bag = "";
    
    for(let i=str.length-1;i>=0;i--){
        bag+=str[i]
    }
    return bag
}

console.log(reverseStr("Bhaskara"))



// function reverseStr(str) {
//     if (str.length === 1) {
//       return str;
//     }
//     return reverseStr(str.slice(1)) + str[0];
//   }

//   console.log(reverseStr("Bhaskara"))



/*
Explanation: In both the cases the time complexity is O(n) and space complexity is O(n) I ma just showing you different different approches 
to solve single problem, In first solution I just run a reverse loop and store its value in bag but in second solution I down the string,
and recursively reversing the remaining characters and then prepending the first character.
*/