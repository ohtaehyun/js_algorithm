// https://programmers.co.kr/learn/courses/30/lessons/70130
function solution(a) {
    let answer = 0;
    const counter = new Map();
    
    a.forEach(v=>{
        if(counter.has(v)){
            counter.set(v,counter.get(v) + 1);
        } 
        else{
            counter.set(v,1);
        }
    });
    
    for(const [key,value] of counter){
        let cnt = 0;
        if(value <= answer) continue;
        for(let i = 0; i < a.length; i++){
            if(a[i] !== key && a[i+1] !== key)
                continue;
            else if(a[i] === a[i+1] )
                continue;
            else if(a[i+1] === undefined)
                continue;
            cnt++;
            i++;
        }
        if(answer < cnt) answer = cnt;
    }
    
    return answer * 2;
}