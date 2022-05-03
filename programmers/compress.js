// https://programmers.co.kr/learn/courses/30/lessons/17684#
function solution(msg) {
    const answer = [];
    const dict = new Map();
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((v,idx)=>{
        dict.set(v,idx+1);
    });
    const msg_list = msg.split("");
    for(let i = 0; i < msg_list.length; i++){
        let w = msg_list[i];
        for(let j = i+1; j <msg_list.length; j++){
            const c = msg_list[j];
            if(dict.has(w+c)){
                w+=c;
                i++;
            }
            else{
                dict.set(w+c,dict.size+1);
                break;
            }
        }
        answer.push(dict.get(w));
    }
    return answer;
}