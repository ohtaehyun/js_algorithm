// https://programmers.co.kr/learn/courses/30/lessons/60061
function solution(n, build_frame) {
    var answer = [];
    const matrix = Array.from(new Array(n+1),()=>new Array(n+1).fill(0));
    const PILLAR = 1;
    const BO = 2;
    const INSTALL = 1;
    const UNINSTALL = 0;
    
    const pillarRemovable = (x,y) => {
        
        if(matrix[y+1][x-1] >= 2){
            if( !((matrix[y+1][x-2] >= 2 && matrix[y+1][x] >= 2) || matrix[y][x-1]%2 === 1) )
                return false;
        }
        
        if(matrix[y+1][x] >= 2){
            if( !((matrix[y+1][x-1] >= 2 && matrix[y+1][x+1] >= 2) || matrix[y][x+1]%2 === 1) )
                return false;
        }
        
        //위에 기둥이 있는데 기둥을 세울 보가 없는 경우
        if(matrix[y+1][x] % 2 === 1 && !(matrix[y+1][x-1] >= 2 || matrix[y+1][x] >= 2) ){
            return false;
        }
        
        return true; 
    }
    
    const boRemovable = (x,y) => {
        
        if(matrix[y][x-1] >= 2){
            if(matrix[y-1][x-1]%2 !== 1 && matrix[y-1][x] % 2 !== 1){
                return false; 
            }
        }
        
        if(matrix[y][x+1] >= 2){
            if(matrix[y-1][x+1]%2 !== 1 && matrix[y-1][x+2] % 2 !== 1){
                return false; 
            }
        }
        // 현재 좌표 위에 기둥이 있는데 아래에 기둥이나 왼쪽에 보가 없다면 이 보는 제거 불가 
        if( matrix[y][x] %2 === 1){
            if(!(matrix[y][x-1] >= 2 || matrix[y-1][x] % 2 === 1)){
                return false; 
            }
        }
        
        if(matrix[y][x+1]%2 === 1){
            if(!(matrix[y][x+1] >= 2 || matrix[y-1][x+1] % 2 === 1)){
                return false; 
            }
        }
        return true; 
    }
    
    build_frame.forEach(([x,y,a,b])=>{
        a++;
        if(a == PILLAR){
            if(b === INSTALL){
                // 바닥이거나 보의 위 혹은 기둥 위에서 설치 가능 
                if( y === 0 || matrix[y-1][x] % 2 === 1 || matrix[y][x] === 2 || ( x >0 && matrix[y][x-1] >= 2) ){
                    matrix[y][x] += PILLAR;
                }
            }
            else{
                if(pillarRemovable(x,y)){
                    matrix[y][x] -= PILLAR;
                }
            }
        }   
        else{
            if(b === INSTALL){
                //확인 작업 필요(설치지점 기준 양끝이 보거나 한쪽 끝이 기둥이어야 함)
                if( ( y > 0 && matrix[y-1][x] % 2 === 1) || (y > 0 && x < n && matrix[y-1][x+1] % 2 === 1) || ( x > 0 && x < n && matrix[y][x-1] >= 2 && matrix[y][x+1] >= 2) ){
                    matrix[y][x] += BO; 
                }
            }
            else{
                if(boRemovable(x,y)){
                    matrix[y][x] -= BO;
                }
            }
        }
    });
    
    for(let x = 0; x <= n; x++){
        for(let y = 0; y <= n; y++){
            if(matrix[y][x] > 0){
                if(matrix[y][x] === PILLAR + BO){
                    answer.push([x,y,PILLAR-1]);
                    answer.push([x,y,BO-1]);
                }
                else{
                    answer.push([x,y,matrix[y][x]-1]);
                }
            }
        }
    }

    return answer;
}