//https://programmers.co.kr/learn/courses/30/lessons/12911
function solution(n) {
    const splited = ("0"+n.toString(2)).split("");
    let oneCnt = 0;
    let zeroCnt = 0;
    for(let i = splited.length-1; i > -1 ; i--){
        if(splited[i] === "0" && oneCnt > 0 ){
            zeroCnt++;
            splited[i] = "1";
            for(let j = i+1 ; j < splited.length; j++){
                if(zeroCnt > 0){
                    splited[j] = 0;
                    zeroCnt--;
                }
                else{
                    splited[j] = 1;
                }
            }
            break;
        }
        else if(splited[i] === "1"){
            oneCnt++;
        }
        else{
            zeroCnt++;
        }
        
    }
    return parseInt(splited.join(""),2);
}