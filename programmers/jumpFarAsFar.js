// https://programmers.co.kr/learn/courses/30/lessons/12914
function solution(n) {
    const dp = [0,1,2];
    for(let i = 2; i < n; i++){
        dp.push((dp[i-1] + dp[i])%1234567);
    }
    return dp[n];
}