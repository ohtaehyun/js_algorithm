// https://programmers.co.kr/learn/courses/30/lessons/17683
function solution(m, musicinfos) {
    const neo_melody = convertCodes(m);
    let answer = [0,"(None)"];
    musicinfos.forEach(info=>{
        const splited = info.split(",");
        const start = timeToMinute(splited[0]);
        const end = timeToMinute(splited[1]);
        const playTime = end-start;
        const melody = convertCodes(splited[3],playTime);
        const title = splited[2];
        for(let i = 0; i < melody.length;i++){
           if(neo_melody[0] === melody[i]){
               if(neo_melody.join(",") === melody.slice(i,i+neo_melody.length).join(",") && i + neo_melody.length <= playTime){
                   if( answer[0] < playTime){
                       answer = [playTime,title];                   
                   }
               }
           } 
        }
    });
    return answer[1];
}

function timeToMinute(str){
    const splited = str.split(":");
    return Number(splited[0]*60) + Number(splited[1]);
}

function convertCodes(m,time = null){
    if(time===0){
        return [];
    }
    const codes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const melody = [];
    for(let i = 0; i < m.length;i++){
        const code = m.slice(i,i+2);
        const idx = codes.indexOf(code)
        if(idx>-1){
            melody.push(idx);
            i++;
        }
        else{
            melody.push(codes.indexOf(m[i]));
        }
    }
    if(time==null){
        return melody
    }
    if(time<melody.length){
        return melody.splice(0,time);
    }
    if(time-melody.length > 0){
        melody.push(...convertCodes(m,time-melody.length))
    }
    return melody;
}