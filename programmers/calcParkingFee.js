// https://programmers.co.kr/learn/courses/30/lessons/92341
function solution(fees, records) {
    const answer = [];
    const [basicTime,basicFee,standardTime,standardFee] = fees;
    const result = new Map();
    records.forEach(record=>{
        const [time,carNum,action] = record.split(" ");
        if(result.has(carNum)){
            const r = result.get(carNum);
            if(action === "IN"){
                r.lastEnterMinute = toMinute(time);
            }else{
                r.totalMinute += toMinute(time) - r.lastEnterMinute;
                r.lastEnterMinute = null;
            }
        }
        else{
            result.set(carNum,{
                lastEnterMinute:toMinute(time),
                totalMinute:0,
            });
        }
    });
    
    result.forEach((v,k)=>{
        if(v.lastEnterMinute !== null){
            v.totalMinute += 23*60+59 - v.lastEnterMinute;
        }
        const totalFee = v.totalMinute<=basicTime? basicFee : basicFee+Math.ceil((v.totalMinute-basicTime)/standardTime) * standardFee;
        answer.push([totalFee,k]);    
    });
    
    return answer.sort((a,b)=>a[1] - b[1]).map(a=>a[0]);
}


function toMinute(time){
    const [hour,minute] = time.split(":").map(v=>Number(v));
    return hour*60 + minute;
}