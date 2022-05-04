function solution(files) {
    const number = ["0","1","2","3","4","5","6","7","8","9"];
    const answer = [];
    files.forEach((file,idx)=>{
        let head;
        let num;
        for(let i = 1; i<file.length; i++){
            if(number.indexOf(file[i]) > -1){
                head = file.slice(0,i).toLowerCase();
                break;
            }
        }
        for(let i = head.length+1; i < head.length+6; i++){
            if(number.indexOf(file[i]) === -1||i==head.length+5){
                num = file.slice(head.length,i);
                break;
            }            
            if(i == file.length -1){
                num = file.slice(head.length,file.length);
                break;
            }
        }
        answer.push([head,Number(num),file,idx]);
    });
    return answer.sort((a,b)=>{
        if(a[0]<b[0]){
            return -1;
        }
        else if(b[0]<a[0]){
            return 1;
        }
        else{
            if(a[1]<b[1]){
                return -1;
            }
            else if(b[1]<a[1]){
                return 1;
            }
            else{
                if(a[3] < b[3]){
                    return -1;
                }
                else{
                    return 1;
                }
            }
        }
    }).map(v=>v[2]);
}