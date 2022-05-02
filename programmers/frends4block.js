// https://programmers.co.kr/learn/courses/30/lessons/17679#

function solution(m, n, board) {
    const matrix = rotate(m,n,board.map(b=>b.split("")));
    return remove(n,m,matrix);
}

function remove(n,m,matrix){
    const removedPos = [];
    for(let i = 0; i < n-1;i++){
        for(let j = 0; j < m-1; j++){
            if(matrix[i][j] === " "){
                break;
            }
            else if(matrix[i][j] === matrix[i][j+1]&&matrix[i][j] === matrix[i+1][j]&&matrix[i][j] === matrix[i+1][j+1]){
                removedPos.push(...[[i,j],[i+1,j],[i,j+1],[i+1,j+1]]);
            }
        }
    }
    removedPos.map(([x,y])=>{
        matrix[x][y] = " ";
    });
    matrix.forEach((row,idx)=>{
        matrix[idx] = row.filter(r => r!==" ");
        matrix[idx].push(...new Array(m-matrix[idx].length).fill(" "));
    });
    const cnt = new Set(removedPos.map(x=>x.join(","))).size;
    if(cnt > 0){
        return cnt + remove(n,m,matrix);
    }
    return cnt;
}

function rotate(m,n,board){
    const newMatrix = []
    for(let i = 0; i < n; i++){
        const row = [];
        for(let j = m-1; j > -1; j--){
            row.push(board[j][i]);
        }
        newMatrix.push(row);
    }
    return newMatrix;
}


console.log(14, solution(4,5,   ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(15, solution(6,6,   ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));
console.log(14, solution(4,5,   ["AAAAA","AUUUA","AUUAA","AAAAA"]));
console.log(4, solution(2,2,   ["AA","AA"]));
console.log(0, solution(2,2,   ["AA","AB"]));
console.log(4, solution(3,2,   ["AA","AA", "AB"]));
console.log(8, solution(4,2,   ["CC","AA", "AA", "CC"]));
console.log(12, solution(6,2,   ["DD", "CC", "AA", "AA", "CC", "DD"]));
console.log(8, solution(8,2,   ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"]));
console.log(8, solution(6,2,   ["AA", "AA", "CC", "AA", "AA", "DD"]));
console.log(8, solution(4,4,   ["ABCD", "BACE", "BCDD", "BCDD"]));
console.log(27, solution(8,9,   ["ABCDADFDA", "ABDFQWERF", "WKDNFNRIT", "AKAKWODCJ", "AKAKWODCJ", "KKKKKKKKK", "KKKKKKKKK", "KKKKKKKKK"]));
console.log(15, solution(4,5,   ["AAAAA", "AAAAU", "AAAUU", "UUUUU"]));