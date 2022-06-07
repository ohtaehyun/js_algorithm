function solution(n) {
    if(n%2 === 1){
        return 0;
    }
    const dp = new Array(2);
    dp[0] = 1;
    dp[1] = 3;
    
    for(let i = 2; i <= n/2 ; i++){
        dp.push((dp[i-1] + dp.reduce( (acc,now) => {return acc = acc+(now*2) },0))%1000000007 );
    }
    
    console.log(dp.length)
    return dp[n/2];
}