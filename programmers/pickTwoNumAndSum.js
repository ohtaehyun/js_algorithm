// https://programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
    const answer =  Array.from(new Set(getCombi(0,numbers,0)).values()).sort((a,b) => a-b);
    return answer;
}


function getCombi(idx,nums,depth){
    if(depth === 2){
        return [0];
    }
    const result = [];
    
    for(let i = idx; i < nums.length; i++){
        const pick = nums[i];
        const next = getCombi(i+1,nums,depth+1);
        result.push(...next.map(v=>v+pick));
    }
    return result;
}