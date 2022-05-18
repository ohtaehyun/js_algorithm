// https://programmers.co.kr/learn/courses/30/lessons/87377#
function solution(line) {
    const cross = Array.from(new Array(1001),()=>new Array(1001).fill(0));
    let crossPoint=[];
    for(let i = 0; i < line.length; i++){
        const [A,B,E] = line[i];
        for(let j = i+1; j < line.length; j++){
            const [C,D,F] = line[j];
            const x = (E*C - A*F)/(A*D - B*C);
            const y = (B*F - E*D)/(A*D - B*C);
            if(A*D - B*C !== 0 && x%1 === 0 && y%1 === 0 ){
                crossPoint.push([x,y]); 
            }
        } 
    }
    let l = Math.min(...crossPoint.map(v=>v[1])),r = Math.max(...crossPoint.map(v=>v[1]));
    let d = Math.min(...crossPoint.map(v=>v[0])),u = Math.max(...crossPoint.map(v=>v[0]));
    crossPoint = crossPoint.map(([x,y])=>{
        y= y+l*-1;
        x= x+d*-1;
        cross[x][y] = 1; 
        return [x,y];
    });
    l = Math.min(...crossPoint.map(v=>v[1])),r = Math.max(...crossPoint.map(v=>v[1]));
    d = Math.min(...crossPoint.map(v=>v[0])),u = Math.max(...crossPoint.map(v=>v[0]));
    const answer = []; 
    for(let i  = u; i >= d; i--){
        let str = "";
        for(let j = l; j <= r; j++){
            if(cross[i][j] === 1){
                str+="*";
            }
            else{
                str+=".";
            }
        }
        answer.push(str);
    }
    return answer;
}

console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]]));