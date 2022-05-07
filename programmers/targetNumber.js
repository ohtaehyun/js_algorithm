//https://programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
    const length = numbers.length;
    let answer = 0;
    const queue = [[0,0]];
    while(queue.length>0){
        const [idx,sum] = queue.pop();
        if(idx === length){
            if(target === sum){
                answer++;
            }
            continue;
        }
        queue.push([idx+1,sum+numbers[idx]]);
        queue.push([idx+1,sum-numbers[idx]]);
    }
    return answer;
}