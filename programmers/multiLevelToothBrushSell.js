// https://programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
    const price = 100;
    const answer = new Array(enroll.length).fill(0);
    const idxMap = new Map();
    enroll.forEach((name,idx)=>{
       idxMap.set(name,idx); 
    });
    
    seller.forEach((name,sellIdx)=>{
        let sellAmt = amount[sellIdx]*price;
        while(1){
            if(name === "-"){
                break;
            }
            const idx = idxMap.get(name);
            const nextSellAmt = Math.floor(sellAmt/10);
            const amount = sellAmt - nextSellAmt;
            answer[idx] += amount;
            if(nextSellAmt === 0){
                break;
            }
            sellAmt = nextSellAmt;
            name = referral[idx];
        }
    });
    return answer;
}