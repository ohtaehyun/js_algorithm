// https://programmers.co.kr/learn/courses/30/lessons/12941
function solution(A,B){
    var answer = 0;

    A = A.sort((a,b) => a - b);
    B = B.sort((a,b) => b - a);
    return A.reduce((acc,now,idx) =>{
       return acc + now * B[idx]; 
    },0);
    return answer;
}