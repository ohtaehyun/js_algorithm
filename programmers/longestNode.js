// https://programmers.co.kr/learn/courses/30/lessons/49189
function solution(n, edge) {
    const map = Array.from(new Array(n+1),()=>[]);
    const visited = new Array(n+1).fill(0);
    edge.forEach(([s,e])=>{
        map[s].push(e);
        map[e].push(s);
    });
    visited[1] = 1;
    let queue = [1];
    while(queue.length){
        const now = queue.shift();
        map[now].forEach(ne=>{
           if(visited[ne] === 0){
               visited[ne] = visited[now]+1;
               queue.push(ne);
           } 
        });
    }
    return visited.filter(x=>x===Math.max(...visited)).length;
}