// https://programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
    let answer = 0;
    const cacheMap = new Map();
    cities.map((city,idx)=>{
        city = city.toLowerCase();
        if(cacheMap.has(city)){
            cacheMap.delete(city);
            cacheMap.set(city,idx);
            answer+=1;
        }
        else {
            answer += 5;
            if(cacheMap.size < cacheSize){
                cacheMap.set(city,idx);
            }
            else if(cacheMap.size>0 && cacheMap.size === cacheSize){
                cacheMap.delete(cacheMap.entries().next().value[0]);
                cacheMap.set(city,idx);
            }
        }
    });
    return answer;
}