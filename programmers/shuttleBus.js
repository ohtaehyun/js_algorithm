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
    
    const crewTable = [];
    
    let cnt = 0;
    for(let i = 0; i < n; i++){
        const ct = [];
        for(let j = cnt; j < cnt + m && timetable[j] <= shuttleTable[i] ;j++){
            ct.push(timetable[j]);
        }
        cnt += ct.length;
        crewTable.push(ct);
    }
    
    let answer = 0;
    
    if(crewTable[n-1].length < m){
        answer = shuttleTable[n-1];
    }
    else{
        if(crewTable[n-1][m-1] === crewTable[n-1][0]){
            answer = crewTable[n-1][0]-1;
        }
        answer = Math.max(...crewTable[n-1])-1;
    }
    
    const hour = Math.floor(answer / 60);
    const minute = answer % 60;
    return `${hour<10?'0'+hour : hour}:${minute<10?'0'+minute:minute}`;
}