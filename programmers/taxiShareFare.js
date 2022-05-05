// https://programmers.co.kr/learn/courses/30/lessons/72413
function solution(n, s, a, b, fares) {
    const minCoasts = Array.from(Array(n),()=>new Array(n).fill(n*100000+1));
    fares.forEach(([from,to,weight]) =>{
        minCoasts[from-1][to-1] = weight;
        minCoasts[to-1][from-1] = weight;
    });
    
    for(let i = 0; i < n; i++){
        minCoasts[i][i] = 0;
    }
    
    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(minCoasts[i][j] > minCoasts[i][k] + minCoasts[k][j]){
                    minCoasts[i][j] = minCoasts[i][k] + minCoasts[k][j];
                }
            }
        }
    }
    let answer = 100000 *n +1;
    for(let i = 0; i < n; i++){
        if(minCoasts[s-1][i] + minCoasts[i][a-1] + minCoasts[i][b-1] < answer){
            answer = minCoasts[s-1][i] + minCoasts[i][a-1] + minCoasts[i][b-1];
        }
    }
    return answer;
}