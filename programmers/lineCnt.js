// https://programmers.co.kr/learn/courses/30/lessons/12936#
function solution(n, k) {
    const answer = [];
    const factorial = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++){
        factorial[i] = factorial[i-1] * i;
    }
    
    const nums = [];
    
    for(let i = 1; i <= n; i++){
        nums.push(i);
    }
    while(nums.length > 0){
        const idx = Math.floor((k-1)/factorial[nums.length-1]);
        k = k % factorial[nums.length-1];
        answer.push(nums[idx]);
        nums.splice(idx,1);
        if(k === 0){
            answer.push(...nums.reverse());
            break;
        }
    }
    
    return answer;
}