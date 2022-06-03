// https://programmers.co.kr/learn/courses/30/lessons/43163
function solution(begin, target, words) {
    const visited = new Array(words.length).fill(0);
    const wordLength = begin.length;
    let answer = Infinity;
    const queue = [[begin,0]];
    while(queue.length>0){
        const [nowWord,cnt] = queue.shift();
        if(nowWord === target){
            if(answer > cnt){
                answer = cnt;
            }
            continue;
        }
        words.forEach((word,idx)=>{
            const matchCount = word.split("").filter((w,i) => w === nowWord[i]).length;
            if(matchCount === wordLength - 1 && visited[idx] === 0){
                visited[idx] = 1;
                queue.push([word,cnt+1]);
            }
        });
    }
    return answer === Infinity ? 0 : answer;
}