// https://programmers.co.kr/learn/courses/30/lessons/77885#
function solution(numbers) {
    const answer = [];
    numbers.forEach(num => {
        let bin = ["0"].concat(num.toString(2).split(""));
        let zeroPos = bin.length - 1;
        while(zeroPos>=0){
            if(bin[zeroPos] === "0"){
                bin[zeroPos] = "1";
                break;
            }
            zeroPos--;
        }
        zeroPos++;
        while(zeroPos < bin.length){
            if(bin[zeroPos] === "1"){
                bin[zeroPos] = "0";
                break;
            }
            zeroPos++;
        }
        answer.push(parseInt(bin.join(""),2));
    });
    return answer;
}