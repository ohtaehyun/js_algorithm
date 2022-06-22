//https://programmers.co.kr/learn/courses/30/lessons/12927
function solution(n, works) {
    works.sort((a,b) => b-a);
    for(let i = n ; i > 0; i--){
        for(let j = 0; j < works.length-1; j++){
            if(works[j] > works[j+1]){
                works[j]--;
                break;
            }
            else if(j === works.length-2){
                works[works.length-1]--;
                break;
            }
        }
        if(works[0] === 0){
            break;
        }
    }
    
    return works.reduce((sum,now) => sum = sum + now**2,0);
}