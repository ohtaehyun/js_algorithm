// https://en.wikipedia.org/wiki/Dot_product
function solution(a, b) {
    return a.reduce((sum,now,idx) => sum+a[idx]*b[idx],0);
}