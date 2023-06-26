/* 
Question link : https://www.acmicpc.net/problem/8393

Runtime : 152 ms
Memory : 9476 KB

Time Complexity : O(n)

Space Complexity : O(1)

Algorithm :
1. Create interface
2. Take input from user
3. convert input to Number
4. Use for loop to sum from 1 to N
5. print result
*/

// prep
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// take input
let sum = 0;
let limit;
rl.question('', input => {
    limit = Number(input);
    for (let i = 1; i <= limit; i++){
        sum += i;
    }
    console.log(sum);    
    rl.close();

});
