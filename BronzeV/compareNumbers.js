/* 
Question link : https://www.acmicpc.net/problem/1330

Runtime : 152 ms
Memory : 9468 KB

Time Complexity : O(1)

Space Complexity : O(1)

Algorithm :
1. Create interface
2. Take input from user
3. convert input to Number
4. build condition structure and print result

Learned :
1. Convert to number before comparison
*/

// prep
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// take input
rl.question('', input => {
    // calculate result
    const [A, B] = input.split(" ");
    const [ANum, BNum] = [Number(A), Number(B)];
    // make comparison
    if (ANum == BNum){
        console.log("==");
    }
    else if (ANum > BNum){
        console.log(">");
    }
    else{
        console.log("<");
    }

    // close
    rl.close();
});