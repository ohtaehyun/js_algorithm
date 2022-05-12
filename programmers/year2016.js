// https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
    const daysOfMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    const daysOfWeek = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let dayDiff = 0;
    
    for(let i = 0; i < a-1; i++){
        dayDiff += daysOfMonth[i];
    }
    dayDiff += b - 1;
    
    return daysOfWeek[dayDiff%7];
    
}