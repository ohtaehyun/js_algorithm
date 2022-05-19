// https://programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {
    const words = ['A','E','I','O','U'];
    let answer = 0;
    for(let i = 0; i < word.length; i++){
        answer += words.indexOf(word[i])*( (5*5**(4-i)) - 1)/(4) + 1;
    }
    return answer;
}