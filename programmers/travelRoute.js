// https://programmers.co.kr/learn/courses/30/lessons/43164
function solution(tickets) {
    const answer = [];
    dfs("ICN",tickets,[],answer);
    answer.sort();
    return answer[0];
}

function dfs(now,tickets,route,results){
    if(tickets.length === 0){
        results.push([...route,now]);
        return;
    }
    tickets.forEach(([from,to],idx) => {
        if(from == now){
            const nTickets = [...tickets];
            nTickets.splice(idx,1);
            dfs(to,nTickets,[...route,now],results);
        }
    });
}