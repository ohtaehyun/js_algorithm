// https://programmers.co.kr/learn/courses/30/lessons/86053
function solution(a, b, g, s, w, t) {
    const length = g.length;
    let left = 0; 
    let right = (10**9) * (10**5) * 4;
    let answer =  (10**9) * (10**5) * 4;
    while(left<=right){
        const middle = Math.floor((left+right)/2);
        let goldSum = 0;
        let silverSum = 0;
        let totalSum = 0;
        for(let i = 0; i < length;i++){
            const move = Math.ceil(Math.floor(middle/t[i])/2); // 트럭이 목적지에 도착할 수 있는 횟수 
            const total = move * w[i];
            goldSum += g[i] < total ? g[i] : total;
            silverSum += s[i] < total ? s[i] : total;
            totalSum += g[i]+s[i] < total ? g[i] + s[i] : total;
        }
        if(goldSum >= a && silverSum >= b && totalSum >= a+b){ // 능력이 초과된 상태
            right = middle - 1;
            answer = Math.min(answer,middle);
        }
        else{ // 능력이 부족한 상태
            left = middle+1;  
        }
    }
    return answer;    
}