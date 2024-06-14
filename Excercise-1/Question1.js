
/*Question 1.
Given that you are using JavaScript.
Write a function that takes n as input.
And prints the following pattern.
1
21
321
4321
...
*/



const pattern = (n) => {
    for(let i=1;i<=n;i++){
        let bag="";
        for(let j=i;j>=1;j--){
            bag+=j
        }
        console.log(bag)
    }
}

// second approach to solve this question

// const pattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let bag = "";
//         // Appending spaces for alignment
//         for (let k = n - i; k > 0; k--) {
//             bag += " ";
//         }
//         // Appending numbers in descending order
//         for (let j = i; j >= 1; j--) {
//             bag += j;
//         }
//         console.log(bag);
//     }
// }

pattern(5)

/*
Explanation: In first case time complexity is O(n^2) and space complexity is O(1) and in the second case time complexity is O(n^3) and space complexity is O(1)
*/
















