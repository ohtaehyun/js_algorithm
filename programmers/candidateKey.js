// https://programmers.co.kr/learn/courses/30/lessons/42890#
function solution(relation) {
    const list = [];
    relation[0].map((v,idx)=>{
       list.push(idx); 
    });
    const keys = getKeys(list,0).sort((a,b) => a.length-b.length);
    const candidateKeys = [];
    keys.map(key=>{
        const relSet = new Set();
        for(const rel of relation){
            const keyValues = key.map(v=>rel[v]).join("");
            relSet.add(keyValues);
        }
        if(relSet.size === relation.length){
            let isCk = true;
            for(const ck of candidateKeys){
                const set = new Set(key);
                const l = set.size;
                ck.map(v=>set.add(v));
                if(l===set.size){
                    isCk=false;
                    break;
                }
                
            }
            if(isCk){
                candidateKeys.push(key);
            }
        }
    });
    return candidateKeys.length;
}

function getKeys(list,idx){
    if(list.length == idx){
        return [];
    }
    const keys = [];
    const pick = list[idx];
    const after = getKeys(list,idx+1);
    keys.push(...after);
    keys.push([pick],...after.map(v=>[pick,...v]));
    return keys;
}