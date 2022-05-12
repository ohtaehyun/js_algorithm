// https://programmers.co.kr/learn/courses/30/lessons/68935
function solution(n) {
    let answer = 0;
    const splited = n.toString(3).split("").reverse();
    splited.forEach((num,idx)=>{
        answer += num * 3 ** (splited.length - idx - 1);
    });
    
    return answer;
}