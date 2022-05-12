// https://programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr){
    let visited = -1;
    const answer = [];
    
    arr.forEach(n=>{
        if(visited !== n){
            visited = n;   
            answer.push(n);
        }
    });
    return answer;
}