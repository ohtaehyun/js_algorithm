// https://programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
    const visited = new Array(n).fill(0);
    let answer = 0;
    for(let i = 0; i < n; i++){
        if(visited[i] === 0){
            bfs(i,visited,computers);
            answer++;
        }
    }
    return answer;
}

function bfs(start,visited,computers){
    const queue = [start];
    visited[start] = 1;
    
    while(queue.length>0){
        const now = queue.shift();
        for(let i = 0; i < computers.length; i++){
            if(visited[i] === 0 && computers[now][i] === 1){
                visited[i] = 1;
                queue.push(i);
            }
        }
    }
}