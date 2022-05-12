// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    const totalMoney = price * (count+1) * count / 2;
    return money>=totalMoney? 0 : totalMoney - money;
}