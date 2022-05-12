// https://programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
    if((s.length !== 4 && s.length !== 6) || /[^0-9]/g.test(s) === true){
        return false;
    }
    return true;
}