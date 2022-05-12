// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    const answer = [];
    arr.forEach(n=>{
        if(n%divisor === 0){
            answer.push(n);
        }
    });
    if(answer.length > 0){
        return answer.sort((a,b)=>a-b);
    }
    return [-1];
}