// https://programmers.co.kr/learn/courses/30/lessons/17687
function solution(n, t, m, p) {
    let answer = '';
    let idx = 0;
    let start = 0;
    while(answer.length < t){
        const str = start.toString(n);
        for(const s of str){
            if(idx + 1 === p){
                answer += s.toUpperCase();
            }
            if(answer.length === t){
                break;
            }
            idx = (idx+1)%m;
        };
        start++;
    }
    return answer;
}