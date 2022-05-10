// https://programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
    const numSet = new Set([0,1,2,3,4,5,6,7,8,9]);
    numbers.forEach(v=>numSet.delete(v));
    let answer = 0;
    numSet.forEach(v=>answer+=v);
    return answer;
}