// https://programmers.co.kr/learn/courses/30/lessons/12923
function solution(begin, end) {
    const answer = [];
    
    for(let i = begin; i <= end; i++){
        if(i===1 || i===2){
            answer.push(i-1);
            continue;
        }
        let result = null;
        for(let j = 2; j * j <= i; j++){
            if(i%j === 0 && i/j < 10000000){
                result = i/j;
                break;
            }
        }
        answer.push(result === null? 1 : result);
    }
    
    return answer;
}