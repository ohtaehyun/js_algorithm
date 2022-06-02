// https://programmers.co.kr/learn/courses/30/lessons/42628
function solution(operations) {
    const pq = new Heap();
    operations.forEach(op=>{
        const splited = op.split(" ");
        switch(splited[0]){
            case "I":
                pq.enqueue(Number(splited[1]));
                break;
            case "D":
                if(splited[1]==="1"){
                    pq.dequeueMax();
                }
                else{
                    pq.dequeueMin();
                }
                break;
            default :
                break;
        }
    });
    return pq.getAnswer();
}

class Heap{
    constructor(){
        this.maxArr = [];
        this.minArr = [];
    }

    getAnswer = ()=>{
        if(this.maxArr.length === 0){
            return [0,0];
        }
        return [this.maxArr[0],this.minArr[0]];
    }

    enqueue = (n) => {
        this.maxArr.push(n);
        this.minArr.push(n);
        let now = this.maxArr.length-1;
        while(now > 0){
            const parent = Math.floor((now-1)/2);
            if(this.maxArr[parent] > this.maxArr[now] && this.minArr[parent] < this.minArr[now]){
                break;
            }
            if(this.maxArr[parent] < this.maxArr[now]){
                this.maxSwap(parent,now);
            }
            if(this.minArr[parent] > this.minArr[now]){
                this.minSwap(parent,now);
            }
            now = parent;
        }
    }

    dequeueMax = () => {

        const lastIdx = this.minArr.length-1; 
        if(lastIdx === -1){
            return;
        }
        const target = this.maxArr[0];
        const minIdx = this.minArr.indexOf(target);
        this.minSwap(minIdx,lastIdx);
        this.minArr.pop();
        if(minIdx !== lastIdx){
            let now = minIdx;
            while(now > 0){
                const parent = Math.floor((now-1)/2);
                if(this.minArr[parent] > this.minArr[now]){
                    this.minSwap(parent,now);
                }
                if(this.minArr[parent] <= this.minArr[now]){
                    break;
                }
                now = parent;
            }
        }
        this.maxSwap(0,lastIdx);
        this.maxArr.pop();
        this.maxHeapify();
    }

    dequeueMin = () => {
        const lastIdx = this.maxArr.length-1; 
        if(lastIdx === -1){
            return;
        }
        const target = this.minArr[0];
        const minIdx = this.maxArr.indexOf(target);
        this.maxSwap(minIdx,lastIdx);
        this.maxArr.pop();
        if(minIdx !== lastIdx){
            let now = minIdx;
            while(now > 0){
                const parent = Math.floor((now-1)/2);
                if(this.maxArr[parent] < this.maxArr[now]){
                    this.maxSwap(parent,now);
                }
                if(this.maxArr[parent] >= this.maxSwap[now]){
                    break;
                }
                now = parent;
            }
        }
        this.minSwap(0,lastIdx);
        this.minArr.pop();
        this.minHeapify();
    }

    maxHeapify = () => {
        let now = 0; 
        const length = this.maxArr.length ;
        while(1){
            const left = now * 2 + 1;
            const right = now * 2 + 2;
            if(right < length && this.maxArr[now] < this.maxArr[right] && this.maxArr[right] > this.maxArr[left]){
                this.maxSwap(now,right);
                now = right;
            }
            else if(left < length && this.maxArr[now] < this.maxArr[left] ){
                this.maxSwap(now,left);
                now = left;
            }
            else{
                break;
            }
        }
    }

    minHeapify = () => {
        let now = 0; 
        const length = this.minArr.length;
        while(1){
            const left = now * 2 + 1;
            const right = now * 2 + 2;
            if(right < length && this.minArr[now] > this.minArr[right] && this.minArr[right] < this.minArr[left]){
                this.minSwap(now,right);
                now = right;
            }
            else if(left < length && this.minArr[now] > this.minArr[left] ){
                this.minSwap(now,left);
                now = left;
            }
            else{
                break;
            }
        }
    }
    maxSwap = (a,b)=>{
        const temp = this.maxArr[a];
        this.maxArr[a] = this.maxArr[b];
        this.maxArr[b] = temp;
    }

    minSwap = (a,b)=>{
        const temp = this.minArr[a];
        this.minArr[a] = this.minArr[b];
        this.minArr[b] = temp;
    }
}