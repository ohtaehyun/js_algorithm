// https://programmers.co.kr/learn/courses/30/lessons/67259
function solution(board) {
    const inf = 987654321;
    const len = board.length;
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];
    const visited = [];
    for(let i = 0; i < 4; i++){
        visited.push(Array.from(new Array(len),()=>new Array(len).fill(inf)))
        visited[i][0][0] = 0;
    }
    
    const queue = [[0,0,null,0]];
    while(queue.length > 0){
        const [x,y,dir,cost] = queue.shift();
        if(x===len-1 && y === len-1){
            continue;
        }
        directions.forEach(([nx,ny],idx)=>{
            const nextX = x+nx, nextY = y+ny;
            if(nextX < 0 || len <= nextX || nextY < 0 || len <= nextY || board[nextX][nextY]||Math.abs(idx - dir) === 2) {
                return;
            }
            else{
                const nextCost = cost + 100 + (dir!==null && dir%2 !== idx%2 ? 500:0);
                if(nextCost < visited[idx][nextX][nextY]){
                    visited[idx][nextX][nextY] = nextCost;
                    queue.push([nextX,nextY,idx,nextCost]);
                }
            }
        });
    }
    return Math.min(...visited.map(v=>v[len-1][len-1]));
}