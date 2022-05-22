// https://programmers.co.kr/learn/courses/30/lessons/12949
function solution(arr1, arr2) {
    const transArr2 = transpose(arr2);
    const answer = [];
    for(let i = 0; i < arr1.length; i++){
        const r = []
        for(let j = 0; j < transArr2.length; j++){
            r.push(arr1[i].reduce((acc,now,idx) => {
               return acc + now * transArr2[j][idx];
            },0));
        }
        answer.push(r);
    }
    return answer;
}

function transpose(arr){
    const transposed = [];
    for(let i = 0; i < arr[0].length; i++){
        const r = [];
        for(let j = 0;j < arr.length; j++)
            r.push(arr[j][i]);
        transposed.push(r);
    }
    return transposed;
}