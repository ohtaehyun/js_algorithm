//https://programmers.co.kr/learn/courses/30/lessons/77485#
function solution(rows, columns, queries) {
    const answer = [];
    const matrix = Array.from(Array(rows),()=>new Array(columns).fill(0));
    for(let r = 0; r<rows; r++)
        for(let c = 0; c < columns; c++)
            matrix[r][c] = r*columns+c+1;
    queries.forEach(([rs,cs,re,ce])=>{
        const edges = getEdges(rs-1,cs-1,re-1,ce-1);
        answer.push(Math.min(...edges.map(([x,y]) => matrix[x][y])));
        let i = 0;
        const [lastX,lastY] = edges[edges.length-1];
        let temp = matrix[lastX][lastY];
        for(let i = 0; i < edges.length; i++){
            const [nowX,nowY] = edges[i];
            const nowValue = matrix[nowX][nowY];
            matrix[nowX][nowY] = temp;
            temp=nowValue;
        }
    });
    return answer;
}

function getEdges(rs,cs,re,ce){
    const edges = [];
    for(let c = cs; c < ce; c++){
        edges.push([rs,c]);
    }
    for(let r = rs; r < re; r++){
        edges.push([r,ce]);
    }
    for(let c = ce; c > cs; c--){
        edges.push([re,c]);
    }
    for(let r = re; r > rs; r--){
        edges.push([r,cs]);
    }
    return edges;
}