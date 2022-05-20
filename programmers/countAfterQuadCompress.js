// https://programmers.co.kr/learn/courses/30/lessons/68936
function solution(arr) {
    const answer = [0,0];
    const stack = [[0,0,arr.length-1,arr.length-1]];
    while(stack.length > 0){
        const [sr,sc,er,ec] = stack.pop();
        let zeroCnt = 0;
        for(let r = sr; r <= er; r++){
            for(let c = sc; c <= ec; c++){
                if(arr[r][c] === 0){
                    zeroCnt++;
                }
            }
        }
        if(zeroCnt === 0){
            answer[1]++;
        }
        else if(zeroCnt === (er-sr+1)**2){
            answer[0]++;
        }
        else{
            const mr = Math.floor((sr+er)/2);
            const mc = Math.floor((sc+ec)/2);
            stack.push(...[[sr,sc,mr,mc],[sr,mc+1,mr,ec],[mr+1,sc,er,mc],[mr+1,mc+1,er,ec]]);
        }
    }
    
    return answer;
}
solution([[0,0],[0,1]]);