function solution(user_id, banned_id) {
    const banMap = new Map();
    banned_id.forEach(v=>{
        if(banMap.has(v)===false){
            banMap.set(v,{
                banCnt:1,
                regex:v.replace(/\*/g,"."),
                idList :[]
            });
        }
        else{
            const bm = banMap.get(v);
            bm.banCnt += 1;
        }
    });
    
    user_id.forEach(id=>{
        banMap.forEach(ban=>{
            const regex = RegExp(ban.regex,"g");
            if(regex.test(id) == true && id.length == ban.regex.length){
                ban.idList.push(id);
            }
        });
    });
    const banList = [];
    banMap.forEach(ban=>{
        banList.push(getCombi(ban.idList,0,ban.banCnt));
    });
    const answer = getCount(banList,0);
    let totalSet = new Set();
    for(const a of answer){
        const s = new Set(a);
        if(a.length === s.size)
            totalSet.add(a.sort().join(""));
    }
    return totalSet.size;
    
}

function getCount(list,idx){
    if(list.length === idx){
        return [[]];
    }
    
    const result = [];
    const next = getCount(list,idx+1);
    for(const li of list[idx]){
        for(const ne of next){
            result.push([...li,...ne]);
        }
    }
    return result;
}

function getCombi(list,idx,length){
    if(list.length === idx)
        return [[]];
    const result = [];
    const pick = list[idx];
    const next = getCombi(list,idx+1,length);
    result.push(...next);
    next.map(v=>{
        result.push([pick,...v]);
    });
    if(idx ===0 ){
        return result.filter(v=>v.length === length)
    }
    return result.filter(v=>v.length <= length);
}