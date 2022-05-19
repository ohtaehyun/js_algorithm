// https://programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
    let answer = Infinity;
    const wireMap = Array.from(new Array(n),()=>new Array(n).fill(0));
    wires.forEach(([x,y]) => {
        wireMap[x-1][y-1] = 1;
        wireMap[y-1][x-1] = 1;
    });
    
    wires.forEach(([x,y]) => {
        const diff = compare(wireMap,[x-1,y-1]);
        if(diff<answer)
            answer = diff;
    });
    
    return answer;
}

function compare(wireMap,[start1,start2]){
    wireMap[start1][start2] = 0;
    wireMap[start2][start1] = 0;
    const cnt1 = getCount(wireMap,start1);
    const cnt2 = getCount(wireMap,start2);
    wireMap[start1][start2] = 1;
    wireMap[start2][start1] = 1;
    return Math.abs(cnt1-cnt2);
}

function getCount(wireMap,startPoint){
    const visited = new Array(wireMap.length).fill(0);
    visited[startPoint] = 1;
    let cnt = 1;
    const queue = [startPoint];
    while(queue.length>0){
        const sp = queue.shift();
        const nextNode = wireMap[sp].map((v,idx)=>[v,idx]).filter(([v,idx])=>v === 1 && visited[idx] === 0);
        nextNode.forEach(([v,idx])=>{
            visited[idx] = 1;
            queue.push(idx);
        });
        cnt += nextNode.length;
    }
    return cnt;
}