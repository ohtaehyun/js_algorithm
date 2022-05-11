// https://programmers.co.kr/learn/courses/30/lessons/42862#
function solution(n, lost, reserve) {
    const lLen = lost.length;
    let cnt = 0;
    const reserveArr = new Array(n+1).fill(0);
    reserve.forEach(v=>reserveArr[v] = 1);
    lost = lost.map(v => {
        if(reserveArr[v] === 1){
            reserveArr[v] = 0;
            cnt++;
            return -1;
        }
        else{
            return v;
        }
    }).filter(v=>v>-1);
    lost.sort((a,b) => a-b);
    lost.forEach(l=>{
        if(reserveArr[l-1] === 1){
            reserveArr[l-1] = 0;
            cnt++;
        }
        else if(l+1 <= n && reserveArr[l+1] === 1){
            reserveArr[l+1] = 0;
            cnt++;
        }
    });
    return n - lLen + cnt;
}