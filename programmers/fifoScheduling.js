// https://programmers.co.kr/learn/courses/30/lessons/12920
function solution(n, cores) {
    if(n <= cores.length){
        return n;
    }
    n -= cores.length;
    let answer = 0;
    let left = 1;
    let right = n * 10000;
    
    while(left<right){
        const mid = Math.floor((left+right)/2);
        const cnt = cores.reduce((sum,now) =>  sum = sum + Math.floor(mid/now),0 );
        if(cnt < n){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
    
    cores.forEach(v=>{
       n -= Math.floor((right-1)/v);
    });
    
    cores.forEach((v,i)=>{
       if(right % v === 0){
           n--;
           if(n === 0){
               answer = i+1;
           }
       } 
    });
    
    return answer;
}