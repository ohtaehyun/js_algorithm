// https://programmers.co.kr/learn/courses/30/lessons/70129
function solution(s) {
    const answer = [0,0]
    while(s != "1"){
        s = convert(s,answer)
    }
    return answer;
}

function convert(str,answer){
    const zeroLen = str.split("").filter( x => x === "0").length;
    answer[0] += 1;
    answer[1] += zeroLen;
    return (str.length - zeroLen).toString(2);
}