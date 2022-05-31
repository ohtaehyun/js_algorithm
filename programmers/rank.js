// https://programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
    const upMap = Array.from(new Array(n), ()=> new Array(n).fill(Infinity));
    const downMap = Array.from(new Array(n), ()=> new Array(n).fill(Infinity));
    results.forEach(([w,l])=>{
        upMap[l-1][w-1] = 1; 
        downMap[w-1][l-1] = 1;
    });
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                if(upMap[j][k] > upMap[j][i] + upMap[i][k]){
                    upMap[j][k] = upMap[j][i] + upMap[i][k];
                }
                if(downMap[j][k] > downMap[j][i] + downMap[i][k]){
                    downMap[j][k] = downMap[j][i] + downMap[i][k];
                }
            }   
        }   
    }
    let answer = 0;
    for(let i = 0; i < n; i++){
        let cnt = 0;
        for(let j = 0; j < n; j++){
            if(downMap[i][j] !== Infinity){
                cnt++;
            }
            else if(upMap[i][j] !== Infinity){
                cnt++;
            }
        }
        if(cnt === n-1){
            answer++;
        }
    }
    return answer;
}