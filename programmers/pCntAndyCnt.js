// https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    s.split("").forEach(c=>{
        c = c.toLowerCase();
        switch(c){
            case "y":
                yCnt++;
                break;
            case "p":
                pCnt ++;
                break;
            default:
                break;
        }
    });
    return pCnt === yCnt;
}