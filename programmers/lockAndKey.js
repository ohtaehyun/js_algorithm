//https://programmers.co.kr/learn/courses/30/lessons/60059
function solution(key, lock) {
    const extendedKey = [];
    for(let i = 1; i < lock.length; i++){
        extendedKey.push(new Array(key.length+(lock.length-1)*2).fill(0));
    }
    key.map(v=>{
        extendedKey.push([...new Array(lock.length-1).fill(0),...v,...new Array(lock.length-1).fill(0)]);
    });
    
    for(let i = 1; i < lock.length; i++){
        extendedKey.push(new Array(key.length+(lock.length-1)*2).fill(0));
    }
    
    valChange(lock);
    for(let i = 0; i < 4; i++){     
        const keyStr = JSON.stringify(lock);
        for(r = 0; r <= extendedKey.length - lock.length; r++){
            for(c=0; c <= extendedKey.length - lock.length; c++){
                const temp = [];
                for(let t = r; t < extendedKey.length && t < r + lock.length; t++){
                    if(c+lock.length <= extendedKey.length){
                        temp.push(extendedKey[t].slice(c,c+lock.length));
                    }
                }
                if(JSON.stringify(temp) == keyStr){
                    return true;
                }
            }
        }
        lock = rotate(lock);

    }
    return false;
}

function rotate(matrix){
    const newMatrix = [];
    for(let i = 0; i < matrix[0].length; i++){
        const newRow = [];
        for(let j = matrix.length-1; j > -1; j--){
            newRow.push(matrix[j][i]);
        }
        newMatrix.push(newRow);
    }
    return newMatrix;
}

function valChange(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = matrix[i][j] ===0?1:0;
        }
    }
}