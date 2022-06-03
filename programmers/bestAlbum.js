// https://programmers.co.kr/learn/courses/30/lessons/42579
function solution(genres, plays) {
    const answer = [];
    const popularMap = new Map();
    genres.forEach((genre,idx)=>{
        if(popularMap.has(genre)){
            const info = popularMap.get(genre);
            info.total+=plays[idx];
            info.detail.push([idx,plays[idx]]);
        }
        else{
            popularMap.set(genre,{total:plays[idx],detail:[[idx,plays[idx]]]});
        }
    });
    
    const arr = Array.from(popularMap.values());
    arr.sort((a,b)=>b.total - a.total);
    
    arr.forEach(info => {
        info.detail.sort(([idx1,cnt1],[idx2,cnt2]) => cnt2 - cnt1);
        for(let i = 0; i < 2 && i < info.detail.length; i++){
            answer.push(info.detail[i][0]);
        }
    });
    
    return answer;
}