// https://programmers.co.kr/learn/courses/30/lessons/12973
function solution(s){
    if(s.length % 2 === 1){
        return 0;
    }
    let idx;
    let str = [];
    for(let i = 0; i < s.length; i++){
        if(str.length === 0 || s[i] !== str[str.length-1]){
            str.push(s[i]);
        }
        else if(s[i] === str[str.length-1]){
            str.pop();
        }
    }
    return str.length === 0 ? 1 : 0;
}