// https://programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
    const goal = n-1;
    //n-1의 약수중 제일 작은 수? 1은 정답이 아님
    if(goal%2 === 0){
        return 2;
    }
    for(let i = 3; i < (goal/2); i++){
        if(goal%i === 0){
            return i;
        }
    }
    return goal;
}