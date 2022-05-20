// https://programmers.co.kr/learn/courses/30/lessons/12905
function solution(board)
{
    let answer = 0;
    const dp = Array.from(new Array(board.length),()=>new Array(board[0].length).fill(0));
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            // 정사각형이 되지 않는 경우
            if(i=== 0 || j === 0 || dp[i-1][j-1] === 0 || dp[i-1][j] === 0 || dp[i][j-1] === 0 || board[i][j] === 0){
                dp[i][j] = board[i][j];
            }
            else{
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j]) + 1;
            }
            //정사각형의 한변의 길이를 갱신
            if(dp[i][j] > answer)
                answer = dp[i][j];
        }
    }
    return answer ** 2;
}