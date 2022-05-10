// https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
    const complete = new Map();
    let answer = null;
    completion.forEach(v=>{
        if(complete.has(v))
            complete.set(v,complete.get(v)+1);
        else
            complete.set(v,1);
    });
    participant.forEach(v=>{
        if(complete.has(v)){
            const cnt = complete.get(v);
            if(cnt>1)
                complete.set(v,cnt-1);
            else 
                complete.delete(v);
        }
        else{
            answer = v;
            return false;
        }
    });
    return answer;
}