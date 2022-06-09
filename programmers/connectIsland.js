// https://programmers.co.kr/learn/courses/30/lessons/42861
function solution(n, costs) {
    const townSet = new Set();
    townSet.add(0);
    let answer = 0;
    while(townSet.size<n){
        const [from,to,cost] = costs.filter( ([from,to,cost]) => (townSet.has(from) && !townSet.has(to)) || (townSet.has(to) && !townSet.has(from)) )
                                    .sort((a,b)=>a[2]-b[2])[0];
        townSet.add(from);
        townSet.add(to);
        answer+=cost
    }
    return answer;
}