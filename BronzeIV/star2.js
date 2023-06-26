/* 
Question link : https://www.acmicpc.net/problem/8393

Runtime : 728 ms
Memory : 13596KB

Time Complexity : O(n)

Space Complexity : O(1)

Algorithm :
1. Create interface
2. Take input from user
3. convert input to Number
4. Use for loop -> print spaces then stars

Learned :
1. How to print without newline
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', input => {
    const limit = Number(input);
    for (let i = 0; i < limit; i++){
        for (let j = limit - 1; j > i; j--){
            process.stdout.write(' ');
        }
        for (let j = i; j >= 0; j--){
            process.stdout.write('*');
        }
        console.log();
    }
    rl.close();
});