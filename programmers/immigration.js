// https://programmers.co.kr/learn/courses/30/lessons/43238
function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        const total = times.reduce((acc,time)=>acc+Math.floor(mid/time),0);
        if(total < n){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    
    return left;
}