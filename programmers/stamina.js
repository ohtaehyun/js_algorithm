// https://programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
    dungeons = dungeons.map(([min,used],idx) => [min,used,idx]);
    var answer = -1;
    const queue = [[k,[]]];
    while(queue.length>0){
        const [stamina,visited] = queue.shift();
        const nextDungeons = dungeons.filter(([min,used,idx]) => min <= stamina && visited.indexOf(idx) === -1);
        if(nextDungeons.length === 0 ){
            if(visited.length > answer){
                answer = visited.length;
            }
            continue;
        }
        nextDungeons.forEach(([min,used,idx])=>{
            queue.push([stamina-used,[...visited,idx]]);
        });
    }
    return answer;
}