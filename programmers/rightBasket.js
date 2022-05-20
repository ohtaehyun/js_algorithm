//https://programmers.co.kr/learn/courses/30/lessons/12909
function solution(s){
    const stack = [];
    for(const char of s){
        switch(char){
            case "(":
                stack.push(char);
                break;
            case ")":
                const last = stack.pop();
                if(last === undefined)
                    return false;
                break;
            default:
                break;
        }
    }
    return stack.length === 0 ? true : false;
}