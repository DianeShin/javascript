/* 
Question link : https://www.acmicpc.net/problem/1000

Runtime : 152 ms
Memory : 9480 KB

Time Complexity : O(1)

Space Complexity : O(1)

Algorithm :
1. Create interface
2. Take input from user
3. parseInt, add, return

Learned :
1. How to input/output from console
*/

// prep
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// take input
rl.question('', AB => {
    // parse input
    let [A, B] = AB.split(" ");
    // print output
    console.log(parseInt(A)+parseInt(B));
    // close
    rl.close();
});