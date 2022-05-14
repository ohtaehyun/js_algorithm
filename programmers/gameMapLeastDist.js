// https://programmers.co.kr/learn/courses/30/lessons/1844
function solution(maps) {
    let answer = -1;
    const nexts = [[1,0],[0,1],[-1,0],[0,-1]];
    const rowCnt = maps.length;
    const colCnt = maps[0].length;
    const visited = Array.from(new Array(rowCnt),()=>new Array(colCnt).fill(0));
    visited[0][0] = 1;
    const queue = [[0,0,1]];
    while(queue.length > 0){
        const [x,y,cnt] = queue.shift();
        if(x===rowCnt - 1 && y === colCnt -1 ){
            if(answer == -1 || cnt < answer)
                answer = cnt;
            continue
        }
        for( const [nx,ny] of nexts){
            const nextX = x + nx, nextY = y + ny;
            if(nextX < 0 || nextY <0 || nextX >= rowCnt || nextY >= colCnt || visited[nextX][nextY] === 1 || maps[nextX][nextY] === 0)
                continue
            visited[nextX][nextY] = 1;
            queue.push([nextX,nextY,cnt+1]);
        }
        
    }
    
    return answer;
}