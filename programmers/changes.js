// https://programmers.co.kr/learn/courses/30/lessons/12907
function solution(n, money) {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    
    money.forEach(price => {
       for(let i = price; i <= n; i++){
           dp[i] += dp[i-price];
       } 
    });
    
    return dp[n];
}