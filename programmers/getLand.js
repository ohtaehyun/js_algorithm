// https://programmers.co.kr/learn/courses/30/lessons/12913
function solution(land) {
    const dp = Array.from(new Array(land.length),()=>new Array(4));
    land[0].forEach((v,idx)=>dp[0][idx] = v);
    
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < 4; j++){
            dp[i][j] = Math.max(...dp[i-1].filter((v,idx)=>idx !== j)) + land[i][j];
        }
    }
    return Math.max(...dp[land.length-1]);
}