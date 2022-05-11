// https://programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
    const answer = [];
    commands.forEach(([i,j,k])=>{
        const sliced = array.slice(i-1,j);
        sliced.sort((a,b) => a-b);
        answer.push(sliced[k-1]);
    });
    return answer;
}