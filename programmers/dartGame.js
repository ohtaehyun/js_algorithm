// https://programmers.co.kr/learn/courses/30/lessons/17682#
function solution(dartResult) {
    const nums = [];
    for(let idx = 0; idx<dartResult.length; idx++){
        const c = dartResult[idx];
        switch(c){
            case "S":
                break;
            case "D":
                nums.push(nums.pop()**2);
                break;
            case "T":
                nums.push(nums.pop()**3);
                break;
            case "*":
                const b = nums.pop() * 2;
                if(nums.length != 0){
                    const a = nums.pop() * 2;
                    nums.push(a);
                }
                nums.push(b);
                break;
            case "#":
                nums.push(nums.pop()*-1);
                break;
            default:
                if(c === "1"&& idx+1 != dartResult.length && dartResult[idx+1]==="0"){
                    idx++;
                    nums.push(10);
                }
                else{
                    nums.push(Number(c));
                }
                break;
        }
    };
    return nums.reduce((a,b)=>{
        return a+b;
    },0);
}