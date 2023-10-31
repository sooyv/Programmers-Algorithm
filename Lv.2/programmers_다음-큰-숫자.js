// 나의 풀이
function solution(n) {
    
    // 자연수를 이진수로 변환 했을때, 1의 개수를 구하는 함수
    function countOne(num) {
        // toString(2)를 통해 이진수로 변환 한 뒤, split(1)로 나눠 갯수를 구한다.
        return num.toString(2).split(1).length - 1;
        
        // let one = 0;
        // num.toString(2).split("").map(v => v == 1 ? one++ : one);
        // return one;
    }
    
    let nextNum = n + 1;

    // true로 계속 반복
    while(true) {
        // 2진수로 변환했을 때 1의 갯수가 n과 같은 수라면 nextNum을 return
        if (countOne(n) == countOne(nextNum)) {
            return nextNum;
        } 
        // 아니라면 계속 nextNum을 증가시키면서 반복
        nextNum++;
    }
}

// 다른 사람의 풀이 1
// 정규표현식을 이용한 풀이
function solution(n, a = n + 1) {
    // n.toString(2)로 이진수로 변환한 n을 정규표현식 .match(/1/g)를 이용해 전체에서 1을 찾고 length를 구함
    // n + 1을 한 a를 똑같이 이진수 변환 후 1을 찾고 길이를 구함.
    // 삼항연산자로 n과 a의 길이가 같다면 '다음 큰 숫자인' a를 반환하고 아니라면 solution(n, a = n + 1) 함수 실행
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}

// 다른 사람의 풀이 2
// 비트연산을 이용한 풀이
function nextBigNumber(n) {
    var i, j;
    for (i = 0; !(n & 1); i++) {n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
    for (j = 0; n & 1; i++, j++) {n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
    for (j--, n++; i !== j; i--) {n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
    for (i; i; i--, n++) {n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
    return n;
}