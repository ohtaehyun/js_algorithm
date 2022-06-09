// https://programmers.co.kr/learn/courses/30/lessons/42861
function solution(a, edges) {
    if( a.reduce((acc,w) => acc+w,0) !== 0 ) return -1;
    let answer = 0n;
    
    const edgeMap = new Map();
    for(let i = 0; i < a.length; i++){
        edgeMap.set(i,[]);
    }
    
    edges.forEach(([f,t])=>{
       edgeMap.get(f).push(t);
       edgeMap.get(t).push(f);
    });
    
    const visited = new Array(a.length).fill(0);
    
    const stack=[[0,-1]];
    while(stack.length > 0){
        const [now,prev] = stack.pop();
        if(visited[now] === 1){
            a[prev] += a[now];
            answer += BigInt(Math.abs(a[now]));
            continue;
        }
        // 한번 더 스택에 삽입하여 탐색과 계산의 영역을 분리하여 재귀처럼 구현
        stack.push([now,prev]);
        visited[now] = 1;
        
        edgeMap.get(now)
            .filter(next=> visited[next] === 0)
            .forEach(next => stack.push([next,now]));
    }
    
    
    return answer;
}