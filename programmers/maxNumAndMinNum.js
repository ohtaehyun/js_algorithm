// https://programmers.co.kr/learn/courses/30/lessons/12939
function solution(s) {
    const answer = [Infinity,-Infinity];
    s.split(" ").forEach((v) => {
        v = v*1;
        if(v < answer[0]){
            answer[0] = v;
        }
        if(answer[1] < v){
            answer[1] = v;
        }
    });
    
    return answer.join(" ");
}