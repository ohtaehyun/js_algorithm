// https://programmers.co.kr/learn/courses/30/lessons/17678
function solution(n, t, m, timetable) {
    const shuttleTable = [];
    const startTime = 9*60;  
    for(let i = 0; i < n; i++){
        shuttleTable.push(startTime+i*t);
    }
    
    timetable = timetable.map(v=>{
        const splited = v.split(":");
        return Number(splited[0])*60 + Number(splited[1]);
    }).sort((a,b)=>a-b);
    
    const crewInBus = [];
    let cnt = 0;
    for(let i = 0; i < n; i++){
        const ct = [];
        for(let j = cnt; j < cnt + m && timetable[j] <= shuttleTable[i] ;j++){
            ct.push(timetable[j]);
        }
        cnt += ct.length;
        crewInBus.push(ct);
    }
    
    let answer = 0;
    
    if(crewInBus[n-1].length < m){
        answer = shuttleTable[n-1];
    }
    else{
        answer = Math.max(...crewInBus[n-1])-1;
    }
    
    const hour = Math.floor(answer / 60);
    const minute = answer % 60;
    return `${hour<10?'0'+hour : hour}:${minute<10?'0'+minute:minute}`;
}