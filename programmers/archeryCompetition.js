// https://programmers.co.kr/learn/courses/30/lessons/92342#
function solution(n, info) {
    let answer = [-1];
    let answerDiff = 0;
    const queue = [[]];
    while(queue.length>0){
        const q = queue.shift();
        const idx = q.length;
        if(idx===11){
            let lionScore = 0;
            let apeachScore = 0;
            for(let i=0;i<11;i++){
                if(q[i] > info[i]){
                    lionScore += 10 - i;
                }
                else if(info[i]>0){
                    apeachScore += 10 -i;
                }
            }
            const diff = lionScore - apeachScore;
            if(diff > answerDiff){
                answerDiff = diff;
                answer = q;
            }
            else if(diff === answerDiff && diff>0){
                for(let i = 10; i > -1; i--){
                    if(q[i]>answer[i]){
                        answer = q;
                        break;
                    }
                    else if(q[i]<answer[i]){
                        break;
                    }
                }
            }
        }
        else{
            const remainArrow = q.reduce((remain,now)=>remain-now,n);
            //어피치보다 1발을 더 맞추는 경우
            if(remainArrow>info[idx]){
                queue.push([...q,info[idx]+1]);
            }
            //이번 과녁을 포기하는 경우
            if(idx===10){
                queue.push([...q,remainArrow]);                
            }
            else{
                queue.push([...q,0]);
            }
        }
    }
    return answer;
}