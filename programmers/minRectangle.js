// https://programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
    const maxSize=[0,0];
    sizes.forEach(([w,h])=>{
        let long = w>=h? w:h;
        let short = w>=h? h:w;
        if(maxSize[0] < long){
            maxSize[0] = long;
        }
        if(maxSize[1] < short){
            maxSize[1] = short;
        }
    });
    return maxSize[0] *maxSize[1];  
}