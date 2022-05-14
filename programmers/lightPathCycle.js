// https://programmers.co.kr/learn/courses/30/lessons/86052#
function solution(grid) {
    const dirs = [
        {
            "L":[0,+1,3],
            "R":[0,-1,1],
            "S":[1,0,0]
        },
        {
            "L":[1,0,0],
            "R":[-1,0,2],
            "S":[0,-1,1]
        },
        {
            "L":[0,-1,1],
            "R":[0,+1,3],
            "S":[-1,0,2]
        },
        {
            "L":[-1,0,2],
            "R":[+1,0,0],
            "S":[0,1,3]
        }
    ];
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from(new Array(rows),()=>{
        return Array.from(new Array(cols),()=>new Array(4).fill(0))
    });
    var answer = [];
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < grid[0].length; j++){
            for(let direction = 0; direction < 4; direction++){
                if(visited[i][j][direction] === 0){
                    visited[i][j][direction] = 1;
                    const queue = [[i,j,direction,1]]
                    while(queue.length>0){
                        const [x,y,dir,cnt] = queue.shift();
                        const [nx,ny,ndir] = dirs[dir][grid[x][y]];
                        const nextX = (x+nx) < 0 ? rows-1 : ((x+nx) % rows);
                        const nextY = (y+ny) < 0 ? cols-1 : ((y+ny) % cols);
                        if(visited[nextX][nextY][ndir] === 0){
                            visited[nextX][nextY][ndir] = 1;
                            queue.push([nextX,nextY,ndir,cnt+1]);
                        }
                        else{
                            answer.push(cnt)
                        }
                    }
                }
            }
        }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}