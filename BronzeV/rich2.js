/* 
Question link : https://www.acmicpc.net/problem/1271

Runtime : 136 ms
Memory : 9468 KB

Time Complexity : O(1)

Space Complexity : O(1)

Algorithm :
1. Create interface
2. Take input from user
3. convert input to BigInt
4. perform calculation, convert to string, remove n
5. print result

Learned :
1. Dealing with big numbers
2. How to remove n from BigInt
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
    const [money, cnt] = input.split(" ");
    const moneyBig = BigInt(money);
    const cntBig = BigInt(cnt);
    const result = (moneyBig/cntBig).toString().replace("n", "");
    const remainder = (moneyBig%cntBig).toString().replace("n", "");
   
    // print output
    console.log(result);
    console.log(remainder);

    // close
    rl.close();
});