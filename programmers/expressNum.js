// https://programmers.co.kr/learn/courses/30/lessons/12924
function solution(n) {
    let answer = 0;
    let left = 1;
    let sum = 0;
    
    for(let i = 1; i <= n; i++){
        if(sum < n){
            sum += i;
        }
        else if (sum === n){
            answer++;
            sum -= left;
            left++;
            i--;
        }
        else{
            sum -= left;
            left++;
            i--;
        }
    }
    return answer+1;
}