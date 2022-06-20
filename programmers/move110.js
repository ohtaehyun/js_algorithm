function solution(s) {
    const answer = [];
    s.forEach(str => {
        let result = "";
        let findCnt = 0;
        const splited = str.split("");
        const removed = [];
        
        while(splited.length>0){
            const ch = splited.pop();
            if(ch==="1" && removed[removed.length-1] === "1" && removed[removed.length-2] === "0"){
                removed.pop();
                removed.pop();
                findCnt++;
            }
            else{
                removed.push(ch);
            }
        }
        
        while(removed.length>0){
            const ch = removed.pop();
            if(ch==="1" && (removed[removed.length-1] === "1" || removed.length===0) && findCnt>0){
                result += "110".repeat(findCnt);
                findCnt = 0;
            }
            result += ch;
        }
        
        if(findCnt > 0){
            result += "110".repeat(findCnt);
        }
        
        answer.push(result);
    });
    
    return answer;
}