function solution(routes) {
    routes.sort((a,b) => a[1] - b[1]);
    let answer = 0;
    let cameraPosition = -Infinity;
    routes.forEach(([enter,leave])=>{
        if(cameraPosition < enter){
            answer++;
            cameraPosition = leave;
        }
    });
    return answer;
}