// https://programmers.co.kr/learn/courses/30/lessons/84021#
function solution(game_board, table) {
    const emptyShapes = [];
    const visited = Array.from(new Array(game_board.length),()=>new Array(game_board.length).fill(0));
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];
    const length = game_board.length;
    let answer = 0;
    
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(game_board[i][j] === 0 && visited[i][j] === 0){
                const positions = [[i,j]];
                //빈칸의 모양을 찾기위한 bfs 해야함
                visited[i][j] = 1;
                const queue = [[i,j]];
                while(queue.length > 0){
                    const [nowX,nowY] = queue.shift();
                    const nextPositions = directions.map(([x,y]) => [nowX+x,nowY+y])
                                                    .filter(([nx,ny]) => 0 <= nx && nx < length && 0 <= ny && ny <= length && visited[nx][ny] === 0 && game_board[nx][ny] === 0);
                    nextPositions.forEach(([nx,ny])=>{
                        queue.push([nx,ny]);
                        positions.push([nx,ny]);
                        visited[nx][ny] = 1;
                    });
                }
                const minX = Math.min(...positions.map(x=>x[0]));
                const minY = Math.min(...positions.map(x=>x[1]));
                positions.sort(([a,b],[c,d]) => a - c || b - d);
                emptyShapes.push(JSON.stringify(positions.map(([x,y])=>[x-minX,y-minY])));
            }
            visited[i][j] = 1;
        }
    }
    
    const tableVisited = Array.from(new Array(game_board.length),()=>new Array(game_board.length).fill(0));
    //퍼즐의 모양 구하기
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(table[i][j] === 1 && tableVisited[i][j] === 0){
                const positions = [[i,j]];
                //퍼즐의 모양을 구하기 위한 bfs
                tableVisited[i][j] = 1;
                const queue = [[i,j]];
                while(queue.length > 0){
                    const [nowX,nowY] = queue.shift();
                    const nextPositions = directions.map(([x,y]) => [nowX+x,nowY+y])
                                                    .filter(([nx,ny]) => 0 <= nx && nx < length && 0 <= ny && ny <= length && tableVisited[nx][ny] === 0 && table[nx][ny] === 1);
                    nextPositions.forEach(([nx,ny])=>{
                        queue.push([nx,ny]);
                        positions.push([nx,ny]);
                        tableVisited[nx][ny] = 1;
                    });
                }
                const minX = Math.min(...positions.map(x=>x[0]));
                const minY = Math.min(...positions.map(x=>x[1]));
                let puzzle = positions.map(([x,y])=>[x-minX,y-minY]);
                outer:
                for(let idx = 0; idx< emptyShapes.length; idx++){
                    const shape = emptyShapes[idx];
                   for(let k = 0; k < 4; k++){
                       puzzle = rotateShape(puzzle);
                       if( JSON.stringify(puzzle) == shape ){
                           answer += puzzle.length;
                           emptyShapes.splice(idx,1);
                           break outer;
                       }
                   }
                }
            }
            tableVisited[i][j] = 1;
        }
    }
    return answer;
}

function rotateShape(shape){
    let maxY = Math.max(...shape.map(x=>x[0]));
    return shape.map(([x,y])=>[y,maxY  - x]).sort(([a,b],[c,d]) => a - c || b - d);
}