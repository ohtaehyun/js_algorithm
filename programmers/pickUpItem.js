// https://programmers.co.kr/learn/courses/30/lessons/87694
function solution(rectangle, characterX, characterY, itemX, itemY) {
    const visited = Array.from(new Array(52),()=>new Array(52).fill(0));
    
    let answer = Infinity;
    const queue = [[characterX,characterY,0]];
    visited[characterX][characterY] = 1;
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];
    while(queue.length > 0){
        const [nowX,nowY,cnt] = queue.shift();
        if(nowX === itemX && nowY === itemY){
            if(cnt < answer){
                answer = cnt;
            }
            continue;
        }

        //다음 이동 가능한 좌표 확인하기
        const nextPositions = directions.map(([x,y]) => [nowX+x,nowY+y])
                            .filter(([nx,ny]) => 
                                //아직 방문하지 않은 좌표
                                visited[nx][ny] === 0 &&  
                                //시작점과 끝점을 포함한 사각형이 1개
                                rectangle.filter(([sx,sy,ex,ey]) =>  
                                    sx<=nowX && nowX <= ex && sy <= nowY && nowY <= ey &&
                                    sx<=nx && nx <= ex && sy <= ny && ny <= ey).length === 1 &&
                                //동시에 시작점과 끝점을 포함하면서 테두리에 있는 사각형이 1개
                                rectangle.filter(([sx,sy,ex,ey]) => 
                                    sx<=nowX && nowX <= ex && sy <= nowY && nowY <= ey &&
                                    sx<=nx && nx <= ex && sy <= ny && ny <= ey &&
                                    (
                                        (nowX === nx && nx === sx) || 
                                        (nowX === nx && nx === ex) || 
                                        (nowY === ny && ny === sy) || 
                                        (nowY === ny && ny === ey)
                                    )
                                ).length === 1
                            );
        nextPositions.forEach(([nx,ny])=>{
           visited[nx][ny] = 1;
            queue.push([nx,ny,cnt+1]);
        });
    }
    
    return answer;
}