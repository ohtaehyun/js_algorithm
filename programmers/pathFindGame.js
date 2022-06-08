// https://programmers.co.kr/learn/courses/30/lessons/42892
function solution(nodeinfo) {
    const info = nodeinfo.map(([a,b],idx)=>[a,b,idx+1]).sort(([a,b],[c,d])=> d-b || a-c);
    const tree = new Tree();
    info.forEach(([x,y,idx])=>{
         tree.add(new Node(x,y,idx));
    });
    return [tree.preOrder(),tree.postOrder()];
}

class Node { 
    constructor(x,y,idx){
        this.x = x;
        this.y = y;
        this.idx = idx; 
        this.left = null;
        this.right = null;
    }
    
    preOrder(){
        const result=[this.idx];
        if(this.left != null){
            result.push(...this.left.preOrder());
        }
        if(this.right != null){
            result.push(...this.right.preOrder());
        }
        return result;
    }
    
    postOrder(){
        const result = [];
        
        if(this.left != null){
            result.push(...this.left.postOrder());
        }
        
        if(this.right != null){
            result.push(...this.right.postOrder());
        }
        
        result.push(this.idx);
        
        return result;
    }
}

class Tree {
    contructor(){
        this.root = null;
    }
    
    add(node){ 
        if(this.root == null){
            this.root = node;
            return;
        }
        let now = this.root;
        while(1){
            if(node.x < now.x){
                if(now.left == null){
                    now.left = node;
                    return;
                }
                else{
                    now = now.left;
                }
            }
            else{
                if(now.right == null){
                    now.right = node;
                    return;
                }
                else{
                    now = now.right;
                }
            }
        }
    }
    
    preOrder(){
        return this.root.preOrder();
    }
    postOrder(){
        return this.root.postOrder();
    }
}