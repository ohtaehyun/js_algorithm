// https://programmers.co.kr/learn/courses/30/lessons/81303
function solution(n, k, cmd) {
    const rows = [];
    for(let idx = 0; idx < n; idx++){
        rows.push({
            idx:idx,
            pr: idx-1>=0?idx-1:null,
            ne: idx+1<n?idx+1:null,
            isDeleted:false,
        });
    }
    
    let selected = rows[k];
    const deletedStack = [];
    
    cmd.map(command => {
        const splited = command.split(" ");
        switch(splited[0]){
            case "U":
                for(let i = 0; i < Number(splited[1]); i++){
                    selected = rows[selected.pr];
                }
                break;
            case "D":
                for(let i = 0; i < Number(splited[1]); i++){
                    selected = rows[selected.ne];
                }
                break;
            case "C":
                deletedStack.push([selected.idx,selected.pr,selected.ne]);
                if(selected.pr!=null)
                    rows[selected.pr].ne = selected.ne;
                if(selected.ne!=null)
                    rows[selected.ne].pr = selected.pr;
                selected.isDeleted=true;
                if(selected.ne === null){
                    selected = rows[selected.pr];
                }
                else{
                    selected = rows[selected.ne];
                }
                break;
            case "Z":
                const rollback = deletedStack.pop();
                if(rollback[1]!=null)
                    rows[rollback[1]].ne = rollback[0];
                if(rollback[2]!=null)
                    rows[rollback[2]].pr = rollback[0];
                rows[rollback[0]].isDeleted = false;
                break;
            default:
                break;
        
        }
    });
    return rows.map(v=>v.isDeleted?"X":"O").join("");
}

console.log(solution(8,2,["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]));