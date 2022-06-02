// https://programmers.co.kr/learn/courses/30/lessons/42627
function solution(jobs) {
    jobs.sort((a,b) => a[0] - b[0]);
    const pq = new PriorityQueue();
    let nowTime = 0;
    let jobIdx = 0; 
    let totalJobTime = 0;
    while(jobIdx < jobs.length || !pq.isEmpty()){
        while(jobIdx < jobs.length){
            if(jobs[jobIdx][0] <= nowTime)
                pq.enqueue(jobs[jobIdx++]);
            else
                break;
        }
        if(!pq.isEmpty()){
            const work = pq.dequeue();
            totalJobTime += nowTime - work[0] + work[1];
            nowTime += work[1];
        }
        else{
            nowTime = jobs[jobIdx][0];
            pq.enqueue(jobs[jobIdx++]);
        }
    }
    return Math.floor(totalJobTime/jobs.length);
}

class PriorityQueue {
    constructor(){
        this.arr=[];
    }
    
    isEmpty = () =>{
        if(this.arr.length === 0)
            return true;
        return false;
    }
    
    enqueue = (work) => {
        this.arr.push(work);
        let now = this.arr.length - 1;
        while(now > 0){
            const parent = Math.floor((now-1)/2);
            if(this.arr[now][1] < this.arr[parent][1]){
                this.swap(now,parent);
                now = parent;
            }
            else{
                break;
            }
        }
    }
    
    dequeue = () => {
        this.swap(0,this.arr.length-1);
        const minWork = this.arr.pop();
        this.heapify();
        return minWork;
    }
    
    heapify = () => {
        let now = 0; 
        const length = this.arr.length;
        while(1){
            const left = now * 2 + 1;
            const right = now * 2 + 2;
            if(right < length && this.arr[right][1] < this.arr[now][1] && this.arr[right][1] < this.arr[left][1]){
                this.swap(now,right);
                now = right;
            }
            else if(left < length && this.arr[left][1] < this.arr[now][1] ){
                this.swap(now,left);
                now = left;
            }
            else{
                break;
            }
        }
    }
    
    swap = (a,b) =>{
        const temp = this.arr[a];
        this.arr[a] = this.arr[b];
        this.arr[b] = temp;
    }
}