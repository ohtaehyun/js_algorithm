// https://programmers.co.kr/learn/courses/30/lessons/12919
function solution(seoul) {
    let answer;
    seoul.forEach((name,idx)=>{
        if(name === "Kim"){
            answer = `김서방은 ${idx}에 있다`;
            return false;
        }
    });
    return answer;
}