// https://programmers.co.kr/learn/courses/30/lessons/76502#
function solution(s) {
    let temp = s;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        temp = temp.slice(1) + temp[0];
        result += isComplete(temp);
    }
    return result;
}
  
function isComplete(str) {
    const stack = [];
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } 
        else if (char === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        }
        else if (char === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } 
        else if (char === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        }
        else{
            stack.push(char);
        }
    }
    return stack.length === 0 ? 1 : 0;
}