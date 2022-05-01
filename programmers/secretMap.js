// https://programmers.co.kr/learn/courses/30/lessons/17681
function solution(n, arr1, arr2) {
    const m1 = arr1.map(num=>num.toString(2).length == n? num.toString(2) : '0'.repeat(n-num.toString(2).length) + num.toString(2) );
    const m2 = arr2.map(num=>num.toString(2).length == n? num.toString(2) : '0'.repeat(n-num.toString(2).length) + num.toString(2) );
    
    const answer = [];
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j < n; j++){
            if(m1[i][j] === "0" && m2[i][j] ==="0")
                row += " ";
            else
                row += "#";
        }
        answer.push(row);
    }
    return answer;
}