// https://programmers.co.kr/learn/courses/30/lessons/12985#
function solution(n,a,b)
{
    let small = a>b ? b : a;
    let big = a>b ? a : b;
    if(small%2 === 1 && small+1 === big){
        return 1;
    }
    let cnt = 1;
    while(1){
        if(small % 2 === 1 && small+1 === big)
            break;
        small = Math.ceil(small/2);
        big = Math.ceil(big/2);
        cnt++;
    }
    return cnt;
}