// https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
    const middle = (s.length-1)/2;
    if(middle%1 === 0){
        return s[middle];
    }
    return s[middle-0.5]+s[middle+0.5]
}