// https://programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
    const answer = [[0,1],[0,2],[0,3]];
    const aDude = [1,2,3,4,5];
    const bDude = [2,1,2,3,2,4,2,5];
    const cDude = [3,3,1,1,2,2,4,4,5,5];
    
    answers.forEach((v,idx)=>{
        if(aDude[idx%aDude.length] === v)
            answer[0][0]++;
        if(bDude[idx%bDude.length] === v)
            answer[1][0]++;
        if(cDude[idx%cDude.length] === v)
            answer[2][0]++;
    });
    const max = Math.max(...answer.map(v=>v[0]));
    return answer.filter(([cnt,idx]) => cnt === max).sort((a,b)=>a[1] - b[1]).map(v=>v[1]);
}