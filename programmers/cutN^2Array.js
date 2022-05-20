// https://programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
    const answer = [];
    for(let i = left; i <= right; i++){
        const divider = Math.floor(i/n) + 1;
        const remainder = (i%n) + 1;
        answer.push(Math.max(divider,remainder));
    }
    return answer;
}